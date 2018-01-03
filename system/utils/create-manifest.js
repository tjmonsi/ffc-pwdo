const getConfig = require('./get-config');

module.exports = (env) => {
  const config = getConfig();
  return JSON.stringify({
    name: config.app.title,
    short_name: config.app.shortTitle,
    start_url: config.theme.startUrl,
    display: config.theme.display,
    theme_color: config.theme.themeColor,
    background_color: config.theme.backgroundColor,
    icons: config.theme.icons
  }, null, env === 'prod' ? null : 2);
};
