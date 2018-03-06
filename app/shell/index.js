import 'core/components/lazy-loader';
import '@littleq/state-manager';
import '@littleq/littleq-router';

const script = document.createElement('script');
script.src = 'https://use.typekit.net/fed2dzd.js';
script.onload = () => {
  try {
    window.Typekit.load({
      async: true
    });
    console.log('start');
    const style = document.createElement('style');
    style.textContent = 'h1, h2, h3, h4, h5, h6 { font-family: "acumin-pro", "Acumin Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; font-weight: 800; }'
    document.head.appendChild(style);
  } catch (e) {
    console.log(e);
  }
};
document.body.appendChild(script);
