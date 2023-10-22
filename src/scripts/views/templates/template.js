import Str from '@supercharge/strings';
import CONFIG from '../../globals/config';

const createRestauranItemTemplate = (restaurant) => `
    <article class="rest-item">
        <div class="wraper">
        <div class="rest-city">
            <p>${restaurant.city}</p>
        </div>
        <img class="rest-item__thumb" src="${CONFIG.BASE_URL_IMAGE}/medium/${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="rest-item__content">
            <h2>Rating ${restaurant.rating}</h2>
            <h3 class="rest-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p class="rest-item__description">${Str(restaurant.description).limit(100, '...').get()}</p>
            <h1></h1>
        </div>
        </div>
    </article>  
`;
const createDetailRestauranItemTemplate = (restaurant) => `
    <h2 class="detail-label">${restaurant.name}</h2>
    <img class="rest-detail__thumb" src="${CONFIG.BASE_URL_IMAGE}/medium/${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="rest-detail__content">
        <h3>Info Restauran: </h3>
        <div class="wraper">
            <label> Alamat </label>
            <p class="rest-detail__address">: ${restaurant.address}</p>
        </div>
        <div class="wraper">
            <label> Kota </label>
            <p class="rest-detail__address">: ${restaurant.city}</p>
        </div>
        
        <p class="rest-detail__description">${restaurant.description}</p>
    </div>
    <div class="rest-detail__menu">
        <h3>Menu </h3>
        <div class="menus">
            <div class="foods-menu">
                <h4>Daftar Makanan</h4>
                <ul>
                ${restaurant.menus.foods.map((food) => `
                    <li>${food.name}</li>
                `).join('')}
                </ul>
            </div>
            <div class="drinks-menu">
                <h4>Daftar Minuman</h4>
                <ul>
                ${restaurant.menus.drinks.map((drink) => `
                    <li>${drink.name}</li>
                `).join('')}
                </ul>
            </div>
        </div>
    </div>
    <div class="customer-reviwes">
        <h3>Customer Review </h3>
        ${restaurant.customerReviews.map((reviwe) => `
        <div class="reviwe">
                <h4 class="reviwe__title">${reviwe.name}</h4>
                <p class="reviwe__content">${reviwe.review}</p>
                <div class="reviwe__date">${reviwe.date}</div>
        </div>
        `).join('')}
    </div>
    `;

export {
  createRestauranItemTemplate,
  createDetailRestauranItemTemplate,
};
