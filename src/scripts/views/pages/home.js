import DataSource from '../../data/data-source';
import { createRestauranItemTemplate } from '../templates/template';

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="explore">
            <h2 tabindex="0" id="explore" class="explore-label">Explore Restaurant</h2>
                <div class="restaurants" id="restaurants"></div>
            </div>
        </section>
    `;
  },
  async afterRender() {
    const restaurants = await DataSource.fetchRestaurants();
    const restaurantElement = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantElement.innerHTML += createRestauranItemTemplate(restaurant);
    });
  },
};

export default Home;
