import DataSource from '../../data/data-source';
import UrlParser from '../../routers/url-parser';
import { createDetailRestauranItemTemplate } from '../templates/template';

const Detail = {
  async render() {
    return `
            <article id="container-detail">
                <div class="rest-detail"></div>
                <div class="comment">
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.fetchById(url);
    const container = document.querySelector('.rest-detail');
    container.innerHTML += createDetailRestauranItemTemplate(restaurant);
    const reviewForm = document.querySelector('#comment-form');
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
        container.innerHTML = '';
        container.innerHTML += createDetailRestauranItemTemplate(restaurant);
      } else {
        console.log('Review gagal disimpan');
      }
    });
  },
};

export default Detail;
