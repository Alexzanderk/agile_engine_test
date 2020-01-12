import { ApiClient } from './api.sercive';

class DataMuse {
  constructor() {
    this.client = new ApiClient('https://api.datamuse.com');
  }

  getSynonym(params) {
    return this.client.get('/words', params);
  }
}

export const datamuseService = new DataMuse();
