import '../../components/app-skeleton';
import DataSource from '../../data/data-source';
import UrlParser from '../../routers/url-parser';
import { createDetailRestauranItemTemplate } from '../templates/template';

const Detail = {
  async render() {
    return `
            <article id="container-detail">
                <div class="rest-detail"></div>
                <app-skeleton></app-skeleton>
                <app-skeleton></app-skeleton>
                <app-skeleton></app-skeleton>
                <div class="comment hide">
                  <span class="comment-title">Leave a Comment</span>
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
    const restaurantElement = document.querySelector('.rest-detail');
    const reviewForm = document.querySelector('#comment-form');
    const skeletons = document.querySelectorAll('app-skeleton');
    const comment = document.querySelector('.comment');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.fetchById(url);
    setTimeout(() => {
      if (Object.keys(restaurant).length > 0) {
        skeletons.forEach((skeleton) => skeleton.classList.add('hide'));
        restaurantElement.classList.remove('skeletonFirst');
        comment.classList.remove('hide');

        restaurantElement.innerHTML += createDetailRestauranItemTemplate(restaurant);
      } else {
        restaurantElement.classList.add('skeletonFirst');
        comment.classList.add('hide');
        skeletons.forEach((skeleton) => skeleton.classList.remove('hide'));
      }
    }, 2000);

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
        console.log('Review berhasil disimpan');
        document.querySelector('#name').value = '';
        document.querySelector('#comment').value = '';
        restaurant.customerReviews = postReview.customerReviews;
        restaurantElement.innerHTML = '';
        restaurantElement.innerHTML += createDetailRestauranItemTemplate(restaurant);
      } else {
        console.log('Review gagal disimpan');
      }
    });
  },
};

export default Detail;
