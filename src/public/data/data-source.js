class DataSource {
    static async fetchRestaurants() {
        try {
            const response = await fetch('./data/DATA.json');
            const data = await response.json();

            if (data.restaurants.length > 0) {
                return Promise.resolve(data.restaurants);
            } else {
                return Promise.reject(new Error('Data restaurants is not found'));
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default DataSource;