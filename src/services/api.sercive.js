import axios from 'axios';

export class ApiClient {
  constructor(baseURL) {
    this.axios = axios.create({
      baseURL,
      timeout: 60 * 1000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  get(relUrl, params, baseUrl = this.axios.defaults.baseURL) {
    return this.axios.get(baseUrl + relUrl, { params });
  }
}
