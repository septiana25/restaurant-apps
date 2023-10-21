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
                <span> Alamat </span>
                <p class="rest-detail__address">: ${restaurant.address}</p>
            </div>
            <div class="wraper">
                <span> Kota </span>
                <p class="rest-detail__address">: ${restaurant.city}</p>
            </div>
            
            <p class="rest-detail__description">${restaurant.description}</p>
        </div>           
`;

export {
  createRestauranItemTemplate,
  createDetailRestauranItemTemplate,
};
