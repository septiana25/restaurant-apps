import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import DataSource from '../public/data/data-source';
import { async } from 'regenerator-runtime';

document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.querySelector('.menu-btn');
  const hero = document.querySelector('.hero');
  const main = document.querySelector('main');
  const drawer = document.querySelector('#drawer');
  const drawerBtn = document.querySelector('#drawer-btn');
  const restaurantElement = document.querySelector('#restaurants');
  
  menuBtn.addEventListener('click', function (event) {
    drawer.classList.toggle('active');
    event.stopPropagation();
  });

  drawerBtn.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      drawer.classList.toggle('active');
    } 
  });

  
  hero.addEventListener('click', function () {
    drawer.classList.remove('active');
  });
  
  main.addEventListener('click', function () {
    drawer.classList.remove('active');
  });

  const renderRestaurants = async () => {
    try {
      const restaurants = await DataSource.fetchRestaurants();
      const restaurantCards = restaurants.map(restaurant => {
        return `

          <article class="rest-item">
            <div class="wraper">
              <div class="rest-city">
                <h1>${restaurant.city}</h1>
              </div>
              <img class="rest-item__thumb" src="${restaurant.pictureId}" alt="${restaurant.name}">
              <div class="rest-item__content">
                <h2>Rating ${restaurant.rating}</h2>
                <h3 class="rest-item__title"><a href="#">${restaurant.name}</a></h3>
                <p class="rest-item__description">${restaurant.description}</p>
                <h1></h1>
              </div>
            </div>
          </article>
        `;
      }).join('');
      console.log(restaurantElement);
      restaurantElement.innerHTML = restaurantCards;
    } catch (error) {
      console.log(error);
    }
  };

  renderRestaurants();
  
});