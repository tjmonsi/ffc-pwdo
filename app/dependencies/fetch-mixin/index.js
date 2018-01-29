import { fetch, location } from 'global/window';
const host = 'https://raw.githubusercontent.com/tjmonsi/ffc-pwdo/master';

export const FetchMixin = (superClass) => {
  return class extends superClass {
    getHost () {
      return location.host.indexOf('localhost') === 0 ? '' : host;
    }
    fetch (path) {
      const url = location.host.indexOf('localhost') === 0
        ? path
        : host + path;

      return fetch(url)
        .then(result => path.indexOf('.md') < 0 ? result.json() : result.text());
      // add catch
    }
  };
};
