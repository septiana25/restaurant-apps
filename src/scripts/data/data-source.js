import apiURL from '../services/axiosInstance';

class DataSource {
  static async fetchRestaurants() {
    try {
      const response = await apiURL.get('/list');
      if (!response.data.error) {
        return response.data.restaurants;
      }
      return new Error('Data restaurants is not found');
    } catch (error) {
      return new Error('Check your internet connection');
    }
  }

  static async fetchById(url) {
    try {
      const response = await apiURL.get(`detail/${url.id}`);
      if (!response.data.error) {
        return response.data.restaurant;
      }
      return new Error('Data restaurants is not found');
    } catch (error) {
      return new Error('Check your internet connection');
    }
  }

  static async createReview(data) {
    try {
      const response = await apiURL.post('/review', {
        id: data.id,
        name: data.name,
        review: data.review,
      });
      return response.data;
    } catch (error) {
      return new Error('Check your internet connection');
    }
  }
}

export default DataSource;
