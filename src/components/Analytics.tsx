import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
    hj: (...args: any[]) => void;
  }
}

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Get analytics IDs from environment variables or use demo values
    const GA_MEASUREMENT_ID =
      import.meta.env.VITE_GA_MEASUREMENT_ID || "G-DEMO12345";
    const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID || "123456789";
    const HOTJAR_ID = import.meta.env.VITE_HOTJAR_ID || "123456";

    // Only load analytics in production or when IDs are properly configured
    const isDevelopment = import.meta.env.DEV;
    const hasValidGAId =
      GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-DEMO12345";
    const hasValidFBId = FB_PIXEL_ID && FB_PIXEL_ID !== "123456789";
    const hasValidHJId = HOTJAR_ID && HOTJAR_ID !== "123456";

    const scriptsToCleanup: HTMLScriptElement[] = [];

    // Load Google Analytics only if ID is configured
    if (hasValidGAId || !isDevelopment) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);
      scriptsToCleanup.push(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `;
      document.head.appendChild(script2);
      scriptsToCleanup.push(script2);
    }

    // Load Facebook Pixel only if ID is configured
    if (hasValidFBId || !isDevelopment) {
      const fbScript = document.createElement("script");
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
      scriptsToCleanup.push(fbScript);
    }

    // Load Hotjar only if ID is configured
    if (hasValidHJId || !isDevelopment) {
      const hjScript = document.createElement("script");
      hjScript.innerHTML = `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
      document.head.appendChild(hjScript);
      scriptsToCleanup.push(hjScript);
    }

    return () => {
      // Cleanup scripts if needed
      scriptsToCleanup.forEach((script) => {
        try {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        } catch (error) {
          console.warn("Error removing script:", error);
        }
      });
    };
  }, []);

  // Track page views
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }

    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location]);

  // Event tracking functions
  const trackEvent = (eventName: string, parameters: any = {}) => {
    if (window.gtag) {
      window.gtag("event", eventName, parameters);
    }
    if (window.fbq) {
      window.fbq("track", eventName, parameters);
    }
  };

  const trackConversion = (conversionType: string, value?: number) => {
    const eventData: any = {
      event_category: "conversion",
      event_label: conversionType,
    };

    if (value) {
      eventData.value = value;
      eventData.currency = "USD";
    }

    trackEvent("conversion", eventData);

    // Track specific conversions
    switch (conversionType) {
      case "consultation_request":
        if (window.fbq) window.fbq("track", "Lead");
        break;
      case "resource_download":
        if (window.fbq) window.fbq("track", "ViewContent");
        break;
      case "newsletter_signup":
        if (window.fbq) window.fbq("track", "Subscribe");
        break;
      case "contact_form":
        if (window.fbq) window.fbq("track", "Contact");
        break;
    }
  };

  // Make tracking functions available globally
  useEffect(() => {
    (window as any).trackEvent = trackEvent;
    (window as any).trackConversion = trackConversion;
  }, []);

  return null;
};

// Hook for tracking specific interactions
export const useAnalytics = () => {
  const trackPageView = (pageName: string) => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  const trackFormSubmission = (formType: string, formData: any = {}) => {
    if (window.gtag) {
      window.gtag("event", "form_submit", {
        form_type: formType,
        ...formData,
      });
    }
    if (window.fbq) {
      window.fbq("track", "Lead", formData);
    }
  };

  const trackDownload = (resourceName: string) => {
    if (window.gtag) {
      window.gtag("event", "file_download", {
        file_name: resourceName,
        event_category: "engagement",
      });
    }
    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: resourceName,
        content_type: "resource",
      });
    }
  };

  const trackOutboundClick = (url: string, linkText: string) => {
    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: "outbound",
        event_label: url,
        transport_type: "beacon",
      });
    }
  };

  const trackScroll = (percentage: number) => {
    if (window.gtag && percentage % 25 === 0) {
      window.gtag("event", "scroll", {
        event_category: "engagement",
        event_label: `${percentage}%`,
      });
    }
  };

  const trackTimeOnPage = (seconds: number) => {
    if (window.gtag && seconds > 30 && seconds % 30 === 0) {
      window.gtag("event", "timing_complete", {
        name: "page_engagement",
        value: seconds,
        event_category: "engagement",
      });
    }
  };

  return {
    trackPageView,
    trackFormSubmission,
    trackDownload,
    trackOutboundClick,
    trackScroll,
    trackTimeOnPage,
  };
};

// Performance monitoring
export const trackPerformance = () => {
  useEffect(() => {
    // Track Core Web Vitals
    if ("web-vital" in window) {
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            if (window.gtag) {
              window.gtag("event", "web_vital", {
                event_category: "Web Vitals",
                event_label: metric.name,
                value: Math.round(metric.value * 1000),
                custom_parameter_1: metric.id,
                non_interaction: true,
              });
            }
          });

          getFID((metric) => {
            if (window.gtag) {
              window.gtag("event", "web_vital", {
                event_category: "Web Vitals",
                event_label: metric.name,
                value: Math.round(metric.value),
                custom_parameter_1: metric.id,
                non_interaction: true,
              });
            }
          });

          getFCP((metric) => {
            if (window.gtag) {
              window.gtag("event", "web_vital", {
                event_category: "Web Vitals",
                event_label: metric.name,
                value: Math.round(metric.value),
                custom_parameter_1: metric.id,
                non_interaction: true,
              });
            }
          });

          getLCP((metric) => {
            if (window.gtag) {
              window.gtag("event", "web_vital", {
                event_category: "Web Vitals",
                event_label: metric.name,
                value: Math.round(metric.value),
                custom_parameter_1: metric.id,
                non_interaction: true,
              });
            }
          });

          getTTFB((metric) => {
            if (window.gtag) {
              window.gtag("event", "web_vital", {
                event_category: "Web Vitals",
                event_label: metric.name,
                value: Math.round(metric.value),
                custom_parameter_1: metric.id,
                non_interaction: true,
              });
            }
          });
        },
      );
    }

    // Track page load time
    window.addEventListener("load", () => {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (window.gtag) {
        window.gtag("event", "timing_complete", {
          name: "page_load_time",
          value: loadTime,
          event_category: "performance",
        });
      }
    });
  }, []);
};

export default Analytics;
