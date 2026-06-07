/**
 * useToast Composable
 *
 * A composable function for toast notifications.
 * Unlike plugins, composables are imported and used per component.
 *
 * Usage:
 *   import { useToast } from '@/composables/useToast'
 *   const toast = useToast()
 *   toast.success('Message')
 */

import { ref } from "vue";

// Shared state across all instances using this composable
const toasts = ref([]);

export function useToast() {
  // Create toast container if it doesn't exist
  const createContainer = () => {
    let container = document.getElementById("toast-container-composable");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container-composable";
      container.className =
        "fixed top-4 right-4 z-50 space-y-2";
      document.body.appendChild(container);
    }
    return container;
  };

  const showToast = (message, type = "info") => {
    const container = createContainer();
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

    container.appendChild(toast);
    toasts.value.push({ id: Date.now(), element: toast });

    // Auto remove after 3 seconds
    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.3s";
        setTimeout(() => toast.remove(), 300);
      }
    }, 3000);
  };

  return {
    success: (message) => showToast(message, "success"),
    error: (message) => showToast(message, "error"),
    warning: (message) => showToast(message, "warning"),
    info: (message) => showToast(message, "info"),
    // Can also expose reactive state if needed
    toasts,
  };
}

