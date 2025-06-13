import React, { useEffect } from "react";

const PerformanceOptimizations = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement("link");
      fontLink.rel = "preload";
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";
      fontLink.as = "style";
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = ["/og-image.jpg", "/logo.png", "/hero-bg.jpg"];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = src;
        link.as = "image";
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical resources
    const lazyLoadNonCritical = () => {
      // Add intersection observer for images
      const imageObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
              }
            }
          });
        },
        {
          root: null,
          rootMargin: "50px",
          threshold: 0.1,
        },
      );

      // Observe all images with data-src attribute
      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;

      const updateScrollPosition = () => {
        // Update scroll-dependent elements efficiently
        const scrollY = window.scrollY;

        // Update navbar background
        const navbar = document.querySelector("nav");
        if (navbar) {
          navbar.classList.toggle("scrolled", scrollY > 20);
        }

        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener("scroll", requestTick, { passive: true });

      return () => {
        window.removeEventListener("scroll", requestTick);
      };
    };

    // Prefetch likely next pages
    const prefetchNextPages = () => {
      const currentPath = window.location.pathname;
      let nextPages: string[] = [];

      switch (currentPath) {
        case "/":
          nextPages = ["/services", "/about", "/contact"];
          break;
        case "/services":
          nextPages = ["/contact", "/calculator"];
          break;
        case "/about":
          nextPages = ["/services", "/contact"];
          break;
        case "/blog":
          nextPages = ["/resources", "/contact"];
          break;
        default:
          nextPages = ["/contact"];
      }

      nextPages.forEach((page) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = page;
        document.head.appendChild(link);
      });
    };

    // Service worker registration for caching
    const registerServiceWorker = () => {
      if (
        "serviceWorker" in navigator &&
        process.env.NODE_ENV === "production"
      ) {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => {
              console.log("SW registered: ", registration);
            })
            .catch((registrationError) => {
              console.log("SW registration failed: ", registrationError);
            });
        });
      }
    };

    // Execute optimizations
    preloadCriticalResources();
    lazyLoadNonCritical();
    const cleanupScroll = optimizeScroll();
    prefetchNextPages();
    registerServiceWorker();

    // Cleanup
    return () => {
      cleanupScroll();
    };
  }, []);

  // Add critical CSS inlined (this would normally be in head)
  useEffect(() => {
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      body { 
        font-family: Inter, system-ui, sans-serif;
        background-color: #020617;
        color: #e2e8f0;
      }
      .container-custom {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      @media (min-width: 640px) {
        .container-custom {
          padding: 0 1.5rem;
        }
      }
      @media (min-width: 1024px) {
        .container-custom {
          padding: 0 2rem;
        }
      }
    `;

    const style = document.createElement("style");
    style.textContent = criticalCSS;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

// Resource hints component
export const ResourceHints = () => {
  useEffect(() => {
    // DNS prefetch for external domains
    const externalDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google-analytics.com",
      "https://connect.facebook.net",
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical external resources
    const preconnectDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ];

    preconnectDomains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = domain;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

// Image optimization component
export const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}> = ({ src, alt, className, priority = false, sizes }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setError(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={priority ? src : undefined}
        data-src={priority ? undefined : src}
        alt={alt}
        sizes={sizes}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${priority ? "" : "lazy"}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-dark-800 animate-pulse" />
      )}
      {error && (
        <div className="absolute inset-0 bg-dark-800 flex items-center justify-center text-gray-500 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizations;
