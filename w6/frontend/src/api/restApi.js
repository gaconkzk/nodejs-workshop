import qs from 'qs';
import axios from 'axios/index';

const URL = '?';

export default {
  sendPost(urn, body, config, callback) {
    const promise = axios.post(urn, body, config);
    if (callback) {
      promise.then((response) => {
        callback(response);
      });
    }
    return promise;
  },

  sendGet(urn, param, config, callback) {
    let uri = '';
    if (param) {
      uri = URL + qs.stringify(param);
    }
    const promise = axios.get(urn + uri, config);
    if (callback) {
      promise.then((response) => {
        callback(response);
      });
    }
    return promise;
  },
};
