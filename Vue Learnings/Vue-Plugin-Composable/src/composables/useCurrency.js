/**
 * useCurrency Composable
 *
 * A composable function for currency formatting.
 * Unlike plugins, composables are imported and used per component.
 *
 * Usage:
 *   import { useCurrency } from '@/composables/useCurrency'
 *   const currency = useCurrency()
 *   currency.format(1234.56)
 */

export function useCurrency(options = {}) {
  const defaultOptions = {
    currency: "USD",
    locale: "en-US",
    ...options,
  };

  const format = (amount, currencyCode = defaultOptions.currency) => {
    if (typeof amount !== "number") {
      amount = parseFloat(amount) || 0;
    }
    return new Intl.NumberFormat(defaultOptions.locale, {
      style: "currency",
      currency: currencyCode,
    }).format(amount);
  };

  const parse = (currencyString) => {
    if (typeof currencyString === "number") {
      return currencyString;
    }
    return parseFloat(currencyString.replace(/[^\d.-]/g, "")) || 0;
  };

  const formatNumber = (amount) => {
    if (typeof amount !== "number") {
      amount = parseFloat(amount) || 0;
    }
    return new Intl.NumberFormat(defaultOptions.locale).format(amount);
  };

  return {
    format,
    parse,
    formatNumber,
  };
}

