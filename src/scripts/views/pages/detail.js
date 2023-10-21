import DataSource from '../../data/data-source';
import UrlParser from '../../routers/url-parser';
import { createDetailRestauranItemTemplate } from '../templates/template';

const Detail = {
  async render() {
    return `
            <article id="container-detail">
                <div class="rest-detail"></div>
            </article>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.fetchById(url);
    const container = document.querySelector('.rest-detail');
    container.innerHTML += createDetailRestauranItemTemplate(restaurant);
  },
};

export default Detail;
