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
            <h3 class="rest-item__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p class="rest-item__description">${Str(restaurant.description).limit(100, '...').get()}</p>
            <h1></h1>
        </div>
        </div>
    </article>  
`;
const createDetailRestauranItemTemplate = (restaurant) => `
    <h2 tabindex="0" class="detail-label">${restaurant.name}</h2>
    <img class="rest-detail__thumb" src="${CONFIG.BASE_URL_IMAGE}/medium/${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="rest-detail__content">
        <h3 tabindex="0">Info Restauran : </h3>
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
    <div class="rest-detail__menu cards">
        <h3 tabindex="0">Daftar Menu </h3>
        <div class="menus">
            <div class="card menu">
                <h4 tabindex="0" class="card__title">Makanan</h4>
                ${restaurant.menus.foods.map((food) => `
                    <p class="card__content">${food.name}</p>
                `).join('')}
            </div>
            <div class="card menu">
                <h4 tabindex="0" class="card__title">Minuman</h4>
                ${restaurant.menus.drinks.map((drink) => `
                    <p class="card__content">${drink.name}</p>
                `).join('')}
            </div>
        </div>
    </div>
    <div class="customer-reviwes cards">
        <h3 tabindex="0">Ulasan Konsumen </h3>
        ${restaurant.customerReviews.map((reviwe) => `
        <div class="card">
                <h4 class="card__title">${reviwe.name}</h4>
                <p class="card__content">${reviwe.review}</p>
                <div class="card__date">${reviwe.date}</div>
        </div>
        `).join('')}
    </div>
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export {
  createRestauranItemTemplate,
  createDetailRestauranItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
