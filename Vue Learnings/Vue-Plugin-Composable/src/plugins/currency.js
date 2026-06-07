/**
 * Currency Formatter Plugin
 * 
 * This plugin provides global currency formatting utilities.
 * Usage in components:
 *   this.$currency.format(1234.56) // "$1,234.56"
 *   this.$currency.format(1234.56, 'EUR') // "€1,234.56"
 *   this.$currency.parse("$1,234.56") // 1234.56
 */

export default {
  install(app, options = {}) {
    // Default configuration
    const defaultOptions = {
      currency: 'USD',
      locale: 'en-US',
      ...options
    };

    // Currency formatter object
    const currency = {
      /**
       * Format a number as currency
       * @param {number} amount - The amount to format
       * @param {string} currencyCode - Currency code (USD, EUR, GBP, etc.)
       * @returns {string} Formatted currency string
       */
      format: (amount, currencyCode = defaultOptions.currency) => {
        if (typeof amount !== 'number') {
          amount = parseFloat(amount) || 0;
        }
        return new Intl.NumberFormat(defaultOptions.locale, {
          style: 'currency',
          currency: currencyCode,
        }).format(amount);
      },

      /**
       * Parse a currency string back to a number
       * @param {string} currencyString - The currency string to parse
       * @returns {number} Parsed number
       */
      parse: (currencyString) => {
        if (typeof currencyString === 'number') {
          return currencyString;
        }
        // Remove currency symbols and commas, then parse
        return parseFloat(currencyString.replace(/[^\d.-]/g, '')) || 0;
      },

      /**
       * Format as a simple number with thousand separators
       * @param {number} amount - The amount to format
       * @returns {string} Formatted number string
       */
      formatNumber: (amount) => {
        if (typeof amount !== 'number') {
          amount = parseFloat(amount) || 0;
        }
        return new Intl.NumberFormat(defaultOptions.locale).format(amount);
      }
    };

    // Make it available globally
    app.config.globalProperties.$currency = currency;

    // Also provide it as a composable/injectable
    app.provide('currency', currency);
  }
};

