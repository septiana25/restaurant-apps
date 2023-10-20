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
}

export default DataSource;
