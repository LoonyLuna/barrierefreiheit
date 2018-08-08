module.exports = {
  browserSync: {
    ui: {
      port: 3001
    },
    hostname: "heika.dt",
    port: 3000,
    openAutomatically: false,
    reloadDelay: 50,
    injectChanges: true,
    browser: 'firefox'
  },

  drush: {
    enabled: false,
    alias: {
      css_js: 'drush @SITE-ALIAS cc css-js',
      cr: 'drush @SITE-ALIAS cr'
    }
  },

  twig: {
    useCache: false
  }
};
