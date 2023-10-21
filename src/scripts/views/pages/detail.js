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
    // const restaurant = await DataSource.fetchRestaurant(id);
    const container = document.querySelector('.rest-detail');
    container.innerHTML += createDetailRestauranItemTemplate();
  },
};

export default Detail;
