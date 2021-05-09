import Axios from 'axios';
import { API_BASE_URL } from '../../CONSTANTS';

const api = Axios.create({
  baseURL: API_BASE_URL
});

export default api;