import 'regenerator-runtime';
import '../../components/app-skeleton';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestauranItemTemplate } from '../templates/template';

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="explore">
            <h2 tabindex="0" id="explore" class="explore-label">Your Restaurant Favorite</h2>
                <div class="restaurants" id="restaurants"></div>
            </div>
        </section>
    `;
  },
  async afterRender() {
    const restaurantElement = document.querySelector('#restaurants');
    const skeletonFirst = document.createElement('app-skeleton');
    const skeletonSecond = document.createElement('app-skeleton');
    const skeletonThrid = document.createElement('app-skeleton');

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurantElement.append(skeletonFirst, skeletonSecond, skeletonThrid);
    const renderTemplateDetail = () => restaurants.forEach((restaurant) => {
      restaurantElement.innerHTML += createRestauranItemTemplate(restaurant);
    });
    setTimeout(() => {
      if (restaurants.length > 0) {
        skeletonFirst.classList.add('hide');
        skeletonSecond.classList.add('hide');
        skeletonThrid.classList.add('hide');
        renderTemplateDetail();
      } else {
        skeletonFirst.classList.remove('hide');
        skeletonSecond.classList.remove('hide');
        skeletonThrid.classList.remove('hide');
        console.log('data tidak ada');
      }
    }, 700);
  },
};

export default Favorite;
