import axios from 'axios';
import { MEDUSA_API_KEY } from "@env";

const api = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'x-publishable-api-key': MEDUSA_API_KEY || '',
  }
});

export default api;
