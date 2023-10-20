import 'regenerator-runtime';
import Str from '@supercharge/strings';
import '../styles/main.css';
import DataSource from './data/data-source';
import CONFIG from './globals/config';

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const hero = document.querySelector('.hero');
  const main = document.querySelector('main');
  const drawer = document.querySelector('#drawer');
  const drawerBtn = document.querySelector('#drawer-btn');
  const restaurantElement = document.querySelector('#restaurants');

  menuBtn.addEventListener('click', (event) => {
    drawer.classList.toggle('active');
    event.stopPropagation();
  });

  drawerBtn.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      drawer.classList.toggle('active');
    }
  });

  hero.addEventListener('click', () => {
    drawer.classList.remove('active');
  });

  main.addEventListener('click', () => {
    drawer.classList.remove('active');
  });

  const renderRestaurants = async () => {
    try {
      const restaurants = await DataSource.fetchRestaurants();
      const restaurantCards = restaurants.map((restaurant) => `
          <article class="rest-item">
            <div class="wraper">
              <div class="rest-city">
                <p>${restaurant.city}</p>
              </div>
              <img class="rest-item__thumb" src="${CONFIG.BASE_URL_IMAGE}/medium/${restaurant.pictureId}" alt="${restaurant.name}">
              <div class="rest-item__content">
                <h2>Rating ${restaurant.rating}</h2>
                <h3 class="rest-item__title"><a href="#">${restaurant.name}</a></h3>
                <p class="rest-item__description">${Str(restaurant.description).limit(100, '...').get()}</p>
                <h1></h1>
              </div>
            </div>
          </article>
        `).join('');
      restaurantElement.innerHTML = restaurantCards;
    } catch (error) {
      /* improvement handle error */
    }
  };

  renderRestaurants();
});
