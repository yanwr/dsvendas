import Axios from 'axios';
import CONSTANTS from '../../CONSTANTS';

const api = Axios.create({
  baseURL: CONSTANTS.BASE_API_URL
});

export default api;