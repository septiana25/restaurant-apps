import '../../components/app-skeleton';
import '../../components/app-not-found';
import Swal from 'sweetalert2';
import DataSource from '../../data/data-source';
import UrlParser from '../../routers/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createDetailRestauranItemTemplate, createLikeButtonTemplate } from '../templates/template';

const Detail = {
  async render() {
    return `
            <article id="container-detail">
                <div class="rest-detail"></div>
                <div id="likeButtonContainer"></div>
                <app-skeleton></app-skeleton>
                <app-skeleton></app-skeleton>
                <app-skeleton></app-skeleton>
                <div class="comment hide">
                  <h3 tabindex="0" class="comment-title">Kasih Ulasan</h3>
                  <form class="comment-form" id="comment-form">
                    <div class="group">
                      <input placeholder="" id="name" name="name" type="text" required="">
                      <label for="name">Nama</label>
                    </div>
                    <div class="group">
                      <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
                      <label for="comment">Ulasan</label>
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                </div>
              
            </article>
        `;
  },

  async afterRender() {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    const containerDetail = document.querySelector('#container-detail');
    const restaurantElement = document.querySelector('.rest-detail');
    const reviewForm = document.querySelector('#comment-form');
    const skeletons = document.querySelectorAll('app-skeleton');
    const comment = document.querySelector('.comment');

    const notFoundElement = document.createElement('app-not-found');
    notFoundElement.classList.add('hide');
    containerDetail.append(notFoundElement);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.fetchById(url);

    const likeButton = () => {
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          name: restaurant.name,
          city: restaurant.city,
        },
      });
    };

    const notFound = () => {
      setTimeout(() => {
        skeletons.forEach((skeleton) => skeleton.classList.add('hide'));
        notFoundElement.classList.remove('hide');
      }, 2000);
    };

    setTimeout(() => {
      if (Object.keys(restaurant).length > 0) {
        notFoundElement.classList.add('hide');
        skeletons.forEach((skeleton) => skeleton.classList.add('hide'));
        restaurantElement.classList.remove('skeletonFirst');
        comment.classList.remove('hide');

        restaurantElement.innerHTML += createDetailRestauranItemTemplate(restaurant);
        likeButtonContainer.innerHTML = createLikeButtonTemplate();
        likeButton();
      } else {
        restaurantElement.classList.add('skeletonFirst');
        comment.classList.add('hide');
        skeletons.forEach((skeleton) => skeleton.classList.remove('hide'));
        notFound();
      }
    }, 700);

    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.querySelector('#name').value;
      const review = document.querySelector('#comment').value;
      const dataReview = {
        id: url.id,
        name,
        review,
      };
      const postReview = await DataSource.createReview(dataReview);
      if (!postReview.error) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Ulasan Berhasil Disimpan',
          showConfirmButton: false,
          timer: 1500,
        });

        document.querySelector('#name').value = '';
        document.querySelector('#comment').value = '';
        restaurant.customerReviews = postReview.customerReviews;
        restaurantElement.innerHTML = '';
        restaurantElement.innerHTML += createDetailRestauranItemTemplate(restaurant);
        likeButtonContainer.innerHTML = createLikeButtonTemplate();
        likeButton();
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Ulasan Gagal Disimpan',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  },
};

export default Detail;
