// Responsive Testing Utility for The Brand Whisperer Website

export interface ResponsiveBreakpoint {
  name: string;
  minWidth: number;
  maxWidth?: number;
  tailwindPrefix: string;
}

export const breakpoints: ResponsiveBreakpoint[] = [
  { name: "Mobile", minWidth: 320, maxWidth: 639, tailwindPrefix: "default" },
  { name: "SM (Tablet)", minWidth: 640, maxWidth: 767, tailwindPrefix: "sm:" },
  {
    name: "MD (Tablet Large)",
    minWidth: 768,
    maxWidth: 1023,
    tailwindPrefix: "md:",
  },
  {
    name: "LG (Desktop)",
    minWidth: 1024,
    maxWidth: 1279,
    tailwindPrefix: "lg:",
  },
  {
    name: "XL (Desktop Large)",
    minWidth: 1280,
    maxWidth: 1535,
    tailwindPrefix: "xl:",
  },
  { name: "2XL (Desktop XL)", minWidth: 1536, tailwindPrefix: "2xl:" },
];

export interface ComponentTest {
  component: string;
  selector: string;
  expectedBehavior: Record<string, string>;
  criticalClasses: string[];
}

export const responsiveTests: ComponentTest[] = [
  {
    component: "Navigation",
    selector: "nav",
    expectedBehavior: {
      mobile: "Mobile menu button visible, desktop nav hidden",
      tablet: "Desktop nav visible, mobile button hidden",
      desktop: "Full navigation with dropdowns",
    },
    criticalClasses: ["md:hidden", "md:flex", "hidden"],
  },
  {
    component: "Hero Section",
    selector: ".hero-section, section:first-of-type",
    expectedBehavior: {
      mobile: "Single column, smaller text, stacked buttons",
      tablet: "Larger text, horizontal buttons",
      desktop: "Two column layout, largest text",
    },
    criticalClasses: ["grid-cols-1", "lg:grid-cols-12", "text-display-xl"],
  },
  {
    component: "Service Cards",
    selector: ".service-cards, .grid",
    expectedBehavior: {
      mobile: "Single column card layout",
      tablet: "Two column grid",
      desktop: "Three or four column grid",
    },
    criticalClasses: ["grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3"],
  },
  {
    component: "Footer",
    selector: "footer",
    expectedBehavior: {
      mobile: "Stacked sections, single column links",
      tablet: "Two column newsletter form",
      desktop: "Multi-column layout with grid sections",
    },
    criticalClasses: ["grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-12"],
  },
  {
    component: "Typography",
    selector: "h1, h2, .text-display-lg",
    expectedBehavior: {
      mobile: "Smaller responsive text sizes",
      tablet: "Medium text sizes",
      desktop: "Large display text sizes",
    },
    criticalClasses: ["text-display-lg", "lg:text-display-xl", "text-2xl"],
  },
  {
    component: "Containers",
    selector: ".container-custom",
    expectedBehavior: {
      mobile: "Full width with small padding",
      tablet: "Constrained width with medium padding",
      desktop: "Max width with large padding",
    },
    criticalClasses: ["px-4", "sm:px-6", "lg:px-8"],
  },
];

export class ResponsiveValidator {
  private currentWidth: number;

  constructor() {
    this.currentWidth =
      typeof window !== "undefined" ? window.innerWidth : 1200;
  }

  getCurrentBreakpoint(): ResponsiveBreakpoint {
    for (let i = breakpoints.length - 1; i >= 0; i--) {
      const bp = breakpoints[i];
      if (
        this.currentWidth >= bp.minWidth &&
        (!bp.maxWidth || this.currentWidth <= bp.maxWidth)
      ) {
        return bp;
      }
    }
    return breakpoints[0];
  }

  validateNavigation(): boolean {
    const nav = document.querySelector("nav");
    const mobileButton = nav?.querySelector(".md\\:hidden");
    const desktopNav = nav?.querySelector(".hidden.md\\:flex");

    const currentBp = this.getCurrentBreakpoint();

    if (currentBp.minWidth < 768) {
      // Mobile: mobile button should be visible, desktop nav hidden
      return !!(mobileButton && !mobileButton.classList.contains("hidden"));
    } else {
      // Desktop: desktop nav should be visible, mobile button hidden
      return !!(desktopNav && !desktopNav.classList.contains("hidden"));
    }
  }

  validateGridLayouts(): Record<string, boolean> {
    const results: Record<string, boolean> = {};
    const currentBp = this.getCurrentBreakpoint();

    // Test service cards grid
    const serviceGrid = document.querySelector(".grid.grid-cols-1");
    if (serviceGrid) {
      const computedStyle = window.getComputedStyle(serviceGrid);
      const gridCols = computedStyle.getPropertyValue("grid-template-columns");

      if (currentBp.minWidth < 768) {
        results.serviceGrid = gridCols.split(" ").length === 1;
      } else if (currentBp.minWidth < 1024) {
        results.serviceGrid = gridCols.split(" ").length <= 2;
      } else {
        results.serviceGrid = gridCols.split(" ").length >= 3;
      }
    }

    return results;
  }

  validateTypography(): boolean {
    const hero = document.querySelector("h1");
    if (!hero) return false;

    const computedStyle = window.getComputedStyle(hero);
    const fontSize = parseFloat(computedStyle.fontSize);
    const currentBp = this.getCurrentBreakpoint();

    // Validate that typography scales appropriately
    if (currentBp.minWidth < 768) {
      return fontSize < 48; // Should be smaller on mobile
    } else if (currentBp.minWidth < 1024) {
      return fontSize >= 48 && fontSize < 80; // Medium on tablet
    } else {
      return fontSize >= 80; // Large on desktop
    }
  }

  validateSpacing(): boolean {
    const container = document.querySelector(".container-custom");
    if (!container) return false;

    const computedStyle = window.getComputedStyle(container);
    const paddingLeft = parseFloat(computedStyle.paddingLeft);
    const currentBp = this.getCurrentBreakpoint();

    // Validate responsive padding
    if (currentBp.minWidth < 640) {
      return paddingLeft === 16; // 1rem = 16px
    } else if (currentBp.minWidth < 1024) {
      return paddingLeft === 24; // 1.5rem = 24px
    } else {
      return paddingLeft === 32; // 2rem = 32px
    }
  }

  runAllTests(): Record<string, boolean> {
    return {
      navigation: this.validateNavigation(),
      typography: this.validateTypography(),
      spacing: this.validateSpacing(),
      ...this.validateGridLayouts(),
    };
  }

  logTestResults(): void {
    const results = this.runAllTests();
    const currentBp = this.getCurrentBreakpoint();

    console.group(
      `🔍 Responsive Test Results - ${currentBp.name} (${this.currentWidth}px)`,
    );
    console.log(`Breakpoint: ${currentBp.name} (${currentBp.tailwindPrefix})`);
    console.log("Test Results:");

    Object.entries(results).forEach(([test, passed]) => {
      console.log(
        `${passed ? "✅" : "❌"} ${test}: ${passed ? "PASS" : "FAIL"}`,
      );
    });

    const passedTests = Object.values(results).filter(Boolean).length;
    const totalTests = Object.keys(results).length;

    console.log(`\n📊 Summary: ${passedTests}/${totalTests} tests passed`);
    console.groupEnd();
  }
}

// Utility functions for manual testing
export const testResponsiveBreakpoints = () => {
  const validator = new ResponsiveValidator();
  validator.logTestResults();
};

export const simulateBreakpoint = (width: number) => {
  if (typeof window !== "undefined") {
    // This would require developer tools or a testing framework
    console.log(
      `💡 To test ${width}px: Open DevTools > Toggle device toolbar > Set width to ${width}px`,
    );
  }
};

// Test specific components
export const testComponent = (componentName: string) => {
  const test = responsiveTests.find((t) => t.component === componentName);
  if (!test) {
    console.error(`Component test not found: ${componentName}`);
    return;
  }

  const element = document.querySelector(test.selector);
  if (!element) {
    console.error(`Element not found for selector: ${test.selector}`);
    return;
  }

  console.group(`🧪 Testing ${componentName}`);

  test.criticalClasses.forEach((className) => {
    const hasClass =
      element.classList.contains(className) ||
      element.querySelector(`.${className.replace(":", "\\:")}`);
    console.log(
      `${hasClass ? "✅" : "❌"} Class ${className}: ${hasClass ? "Found" : "Missing"}`,
    );
  });

  console.groupEnd();
};

export default ResponsiveValidator;
