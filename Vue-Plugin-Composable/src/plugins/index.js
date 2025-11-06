/**
 * Plugins Index
 * 
 * Centralized plugin registration file.
 * Import and register all plugins here.
 */

import toastPlugin from './toast';
import currencyPlugin from './currency';

export default {
  install(app) {
    // Register all plugins
    app.use(toastPlugin, {
      duration: 3000,
      position: 'top-right'
    });

    app.use(currencyPlugin, {
      currency: 'USD',
      locale: 'en-US'
    });
  }
};

