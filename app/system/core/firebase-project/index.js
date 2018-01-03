
import firebase from 'firebase';
const configs = [];
configs.forEach(config => {
  if (config.name) {
    firebase.initializeApp(config, config.name);
  } else {
    firebase.initializeApp(config);
  }
});
export { firebase };
  