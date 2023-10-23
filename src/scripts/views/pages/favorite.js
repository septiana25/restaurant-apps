import 'regenerator-runtime';
import '../../components/app-skeleton';
import '../../components/app-not-found';
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
    const notFoundElement = document.createElement('app-not-found');

    notFoundElement.classList.add('hide');
    restaurantElement.append(skeletonFirst, skeletonSecond, skeletonThrid, notFoundElement);

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const renderTemplateDetail = () => restaurants.forEach((restaurant) => {
      restaurantElement.innerHTML += createRestauranItemTemplate(restaurant);
    });

    const notFound = () => {
      setTimeout(() => {
        skeletonFirst.classList.add('hide');
        skeletonSecond.classList.add('hide');
        skeletonThrid.classList.add('hide');
        notFoundElement.classList.remove('hide');
        notFoundElement.innerHTML = `
        <style>
          app-not-found {
            grid-column-start: 1;
            grid-column-end: 4;
          }
        </style>
        `;
      }, 2000);
    };

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
        notFound();
      }
    }, 700);
  },
};

export default Favorite;
