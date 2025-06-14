/**
 * Mobile Optimization Utilities
 * Provides helper functions and constants for optimal mobile experience
 */

// Touch target minimum sizes (following iOS/Android guidelines)
export const TOUCH_TARGETS = {
  minimum: 44, // 44px minimum for accessibility
  recommended: 48, // 48px recommended for better UX
  large: 56, // 56px for primary actions
} as const;

// Breakpoints that match Tailwind config
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Mobile-specific spacing
export const MOBILE_SPACING = {
  xs: 4, // 1rem
  sm: 8, // 2rem
  md: 12, // 3rem
  lg: 16, // 4rem
  xl: 20, // 5rem
} as const;

/**
 * Check if current device is likely mobile based on screen width
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < BREAKPOINTS.md;
};

/**
 * Check if device supports touch
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

/**
 * Get optimal touch target size based on element importance
 */
export const getTouchTargetSize = (
  priority: "primary" | "secondary" | "tertiary",
): number => {
  switch (priority) {
    case "primary":
      return TOUCH_TARGETS.large;
    case "secondary":
      return TOUCH_TARGETS.recommended;
    case "tertiary":
      return TOUCH_TARGETS.minimum;
    default:
      return TOUCH_TARGETS.recommended;
  }
};

/**
 * Generate responsive classes for common patterns
 */
export const getResponsiveClasses = {
  // Text sizes
  heading: (level: 1 | 2 | 3 | 4 = 2) => {
    const sizes = {
      1: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
      2: "text-xl sm:text-2xl lg:text-3xl",
      3: "text-lg sm:text-xl lg:text-2xl",
      4: "text-base sm:text-lg lg:text-xl",
    };
    return sizes[level];
  },

  // Body text
  body: (size: "sm" | "base" | "lg" = "base") => {
    const sizes = {
      sm: "text-sm lg:text-base",
      base: "text-base lg:text-lg",
      lg: "text-lg lg:text-xl",
    };
    return sizes[size];
  },

  // Spacing
  padding: (size: "sm" | "md" | "lg" = "md") => {
    const paddings = {
      sm: "p-4 lg:p-6",
      md: "p-6 lg:p-8",
      lg: "p-8 lg:p-12",
    };
    return paddings[size];
  },

  // Margins
  margin: (size: "sm" | "md" | "lg" = "md") => {
    const margins = {
      sm: "m-4 lg:m-6",
      md: "m-6 lg:m-8",
      lg: "m-8 lg:m-12",
    };
    return margins[size];
  },

  // Grid gaps
  gap: (size: "sm" | "md" | "lg" = "md") => {
    const gaps = {
      sm: "gap-3 lg:gap-4",
      md: "gap-4 lg:gap-6",
      lg: "gap-6 lg:gap-8",
    };
    return gaps[size];
  },

  // Button sizes with touch targets
  button: (priority: "primary" | "secondary" | "tertiary" = "secondary") => {
    const touchSize = getTouchTargetSize(priority);
    return `min-h-[${touchSize}px] px-4 lg:px-6 py-3 text-base lg:text-lg`;
  },

  // Card layouts
  card: "p-4 lg:p-6 rounded-lg lg:rounded-xl",

  // Container max widths
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
};

/**
 * Optimize images for mobile
 */
export const getImageSizes = (
  breakpoints: Record<string, number> = BREAKPOINTS,
) => {
  return `(max-width: ${breakpoints.sm}px) 100vw, (max-width: ${breakpoints.lg}px) 50vw, 33vw`;
};

/**
 * Scroll utilities for mobile
 */
export const scrollUtils = {
  // Smooth scroll to element (mobile-safe)
  scrollToElement: (elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  },

  // Prevent scroll when mobile menu is open
  lockScroll: () => {
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
  },

  // Re-enable scroll
  unlockScroll: () => {
    document.body.style.overflow = "";
    document.body.style.touchAction = "";
  },
};

/**
 * Touch gesture utilities
 */
export const touchUtils = {
  // Debounce touch events to prevent accidental double taps
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number = 300,
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Add hover states only for non-touch devices
  addHoverClass: (className: string) => {
    return isTouchDevice() ? "" : className;
  },
};

/**
 * Performance optimization for mobile
 */
export const performanceUtils = {
  // Lazy load images
  lazyLoadImage: (src: string, placeholder?: string) => ({
    src:
      placeholder ||
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"></svg>',
    "data-src": src,
    loading: "lazy" as const,
  }),

  // Reduce motion for users who prefer it
  respectsReducedMotion: () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },
};

/**
 * Form optimization for mobile
 */
export const formUtils = {
  // Get appropriate input mode for different field types
  getInputMode: (
    type: "email" | "tel" | "numeric" | "decimal" | "search" | "url" = "text",
  ) => {
    const modes = {
      email: "email",
      tel: "tel",
      numeric: "numeric",
      decimal: "decimal",
      search: "search",
      url: "url",
      text: "text",
    };
    return modes[type] || "text";
  },

  // Optimize autocomplete attributes
  getAutoComplete: (field: string) => {
    const mappings: Record<string, string> = {
      name: "name",
      "first-name": "given-name",
      "last-name": "family-name",
      email: "email",
      phone: "tel",
      company: "organization",
      "job-title": "organization-title",
      address: "street-address",
      city: "address-level2",
      state: "address-level1",
      zip: "postal-code",
      country: "country",
    };
    return mappings[field] || "off";
  },
};

export default {
  TOUCH_TARGETS,
  BREAKPOINTS,
  MOBILE_SPACING,
  isMobileDevice,
  isTouchDevice,
  getTouchTargetSize,
  getResponsiveClasses,
  getImageSizes,
  scrollUtils,
  touchUtils,
  performanceUtils,
  formUtils,
};
