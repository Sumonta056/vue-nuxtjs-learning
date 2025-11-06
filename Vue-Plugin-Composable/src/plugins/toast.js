/**
 * Toast Notification Plugin
 *
 * This plugin provides a global toast notification system.
 * Usage in components:
 *   this.$toast.success('Success message')
 *   this.$toast.error('Error message')
 *   this.$toast.info('Info message')
 *   this.$toast.warning('Warning message')
 */

export default {
  install(app, options = {}) {
    // Default configuration
    const defaultOptions = {
      duration: 3000,
      position: "top-right",
      ...options,
    };

    // Create a toast container if it doesn't exist
    let toastContainer = document.getElementById("toast-container");
    if (!toastContainer) {
      toastContainer = document.createElement("div");
      toastContainer.id = "toast-container";
      toastContainer.className = `fixed ${
        defaultOptions.position === "top-right"
          ? "top-4 right-4"
          : "top-4 left-4"
      } z-50 space-y-2`;
      document.body.appendChild(toastContainer);
    }

    // Toast function
    const showToast = (message, type = "info") => {
      const toast = document.createElement("div");
      const colors = {
        success: "bg-green-500",
        error: "bg-red-500",
        warning: "bg-yellow-500",
        info: "bg-blue-500",
      };

      toast.className = `${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-between min-w-[300px] animate-slide-in`;
      toast.innerHTML = `
        <span>${message}</span>
        <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.remove()">×</button>
      `;

      toastContainer.appendChild(toast);

      // Auto remove after duration
      setTimeout(() => {
        if (toast.parentElement) {
          toast.style.opacity = "0";
          toast.style.transition = "opacity 0.3s";
          setTimeout(() => toast.remove(), 300);
        }
      }, defaultOptions.duration);
    };

    // Create toast methods
    const toast = {
      success: (message) => showToast(message, "success"),
      error: (message) => showToast(message, "error"),
      warning: (message) => showToast(message, "warning"),
      info: (message) => showToast(message, "info"),
    };

    // Make it available globally
    app.config.globalProperties.$toast = toast;

    // Also provide it as a composable/injectable
    app.provide("toast", toast);
  },
};

