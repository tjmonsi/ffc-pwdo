const getConfig = require('./get-config');

module.exports = () => {
  const config = getConfig();

  return `
import firebase from 'firebase';
const configs = ${JSON.stringify(config.build.firebaseConfig)};
configs.forEach(config => {
  if (config.name) {
    firebase.initializeApp(config, config.name);
  } else {
    firebase.initializeApp(config);
  }
});
export { firebase };
  `;
};
