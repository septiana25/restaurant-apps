import axios from 'axios';
import CONFIG from '../globals/config';

const apiURL = axios.create({
  baseURL: CONFIG.BASE_URL,
});

export default apiURL;
