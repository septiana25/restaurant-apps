/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
import itActsAsFavoriteRestaurantModel from './contracts/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) return;

    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) return;

    if (this.getRestaurant(restaurant.id)) return;

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },

  async searchRestaurants(query) {
    const data = await this.getAll();

    return data.filter((restaurant) => restaurant.name.toLowerCase().includes(query.toLowerCase()));
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
