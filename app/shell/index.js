import 'core/components/lazy-loader';
import '@littleq/state-manager';
import '@littleq/littleq-router';

const script = document.createElement('script');
script.src = 'https://use.typekit.net/fed2dzd.js';
script.onload = () => {
  try {
    window.Typekit.load({ async: true });
  } catch (e) {
    console.log(e);
  }
};
document.body.appendChild(script);
