import axios from 'axios';

import { MEDUSA_API_KEY, API_URL } from '@env';

import { HttpClient } from './httpClient';

const instace = axios.create({
  baseURL: API_URL,
  headers: {
    'x-publishable-api-key': MEDUSA_API_KEY || '',
  }
})

export const axiosClient: HttpClient = {
  async get(url, options) {
    try {
      const payload = await instace.get(url, options);
      return payload.data;
    } catch (error) {
      console.log('error', error);
    }
  }
}
