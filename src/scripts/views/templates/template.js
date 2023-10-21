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
            <h3 class="rest-item__title"><a href="#">${restaurant.name}</a></h3>
            <p class="rest-item__description">${Str(restaurant.description).limit(100, '...').get()}</p>
            <h1></h1>
        </div>
        </div>
    </article>  
`;
const createDetailRestauranItemTemplate = () => `
        <h2 class="detail-label">Nama Restaurant</h2>
        <img class="rest-detail__thumb" src="https://restaurant-api.dicoding.dev/images/medium/25" alt="nama restaurant">
        <div class="rest-detail__content">
            <h3>Info Restauran: </h3>
            <h4>Alamat: </h4>
            <p class="rest-detail__address">Jl. Caringin No. 123, Kota Bandung, Jawa Barat</
            <h4>Kota: </h4>
            <p class="rest-detail__city">Bandung</p>
            <p class="rest-detail__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi. Quidem, quod</p>
        </div>           
`;

export {
  createRestauranItemTemplate,
  createDetailRestauranItemTemplate,
};
