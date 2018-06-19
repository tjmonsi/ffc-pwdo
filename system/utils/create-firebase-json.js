const getConfig = require('./get-config');

const setRoute = (firebase, routes, parent) => {
  for (var subroute in routes.routing) {
    const i = parent + subroute;

    firebase.hosting.rewrites.push({
      source: i.split('/').map(path => (path.indexOf(':') === 0 ? '**' : path)).join('/'),
      destination: '/index.html'
    });
    var arr = i.split('/');

    while (arr.length > 0) {
      if (arr[arr.length - 1].indexOf(':') === 0 && arr[arr.length - 1].indexOf('?') === arr[arr.length - 1].length - 1) {
        arr.pop();
        firebase.hosting.rewrites.push({
          source: arr.map(path => (path.indexOf(':') === 0 ? '**' : path)).join('/'),
          destination: '/index.html'
        });
      } else {
        break;
      }
    }

    if (routes.routing[subroute].routing) setRoute(firebase, routes.routing[subroute].routing, i);
  }
};

module.exports = (env) => {
  const config = getConfig();
  const firebase = {
    // database: {
    //   rules: 'database.rules.json'
    // },
    // firestore: {
    //   rules: 'firestore.rules',
    //   indexes: 'firestore.indexes.json'
    // },
    // storage: {
    //   rules: 'storage.rules'
    // },
    hosting: config.hosting
  };

  for (var j in firebase.hosting.rewrites) {
    if (firebase.hosting.rewrites[j].source === '**') {
      firebase.hosting.rewrites.splice(j, 1);
    }
  }

  if (!firebase.hosting.rewrites) {
    firebase.hosting.rewrites = [];
  }

  setRoute(firebase, config.routes, '');

  firebase.hosting.public = env === 'prod' ? 'build' : 'public';
  return JSON.stringify(firebase, null, 2);
};
