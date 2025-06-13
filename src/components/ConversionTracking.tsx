import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ConversionTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page engagement
    let startTime = Date.now();
    let maxScroll = 0;
    let scrollDepths = [25, 50, 75, 90];
    let trackedDepths: number[] = [];

    const trackScrollDepth = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      maxScroll = Math.max(maxScroll, scrollPercent);

      scrollDepths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
          trackedDepths.push(depth);

          if (window.gtag) {
            window.gtag("event", "scroll_depth", {
              event_category: "engagement",
              event_label: `${depth}%`,
              value: depth,
              page_path: location.pathname,
            });
          }
        }
      });
    };

    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      // Track at 30s, 60s, 120s, 300s intervals
      const timeThresholds = [30, 60, 120, 300];

      timeThresholds.forEach((threshold) => {
        if (timeSpent === threshold) {
          if (window.gtag) {
            window.gtag("event", "time_on_page", {
              event_category: "engagement",
              event_label: `${threshold}s`,
              value: threshold,
              page_path: location.pathname,
            });
          }
        }
      });
    };

    // Track clicks on important elements
    const trackImportantClicks = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Track CTA button clicks
      if (target.matches('button, .btn, [role="button"]')) {
        const buttonText = target.textContent?.trim() || "Unknown Button";

        if (window.gtag) {
          window.gtag("event", "button_click", {
            event_category: "engagement",
            event_label: buttonText,
            page_path: location.pathname,
          });
        }
      }

      // Track external link clicks
      if (target.matches('a[href^="http"]')) {
        const link = target as HTMLAnchorElement;
        const url = link.href;

        if (window.gtag) {
          window.gtag("event", "external_link_click", {
            event_category: "outbound",
            event_label: url,
            page_path: location.pathname,
          });
        }
      }

      // Track email and phone clicks
      if (target.matches('a[href^="mailto:"]')) {
        const email = (target as HTMLAnchorElement).href.replace("mailto:", "");

        if (window.gtag) {
          window.gtag("event", "contact_click", {
            event_category: "contact",
            event_label: "email",
            page_path: location.pathname,
          });
        }
      }

      if (target.matches('a[href^="tel:"]')) {
        if (window.gtag) {
          window.gtag("event", "contact_click", {
            event_category: "contact",
            event_label: "phone",
            page_path: location.pathname,
          });
        }
      }
    };

    // Track form interactions
    const trackFormInteractions = (event: Event) => {
      const target = event.target as HTMLElement;

      if (target.matches("input, textarea, select")) {
        const formElement = target.closest("form");
        const formName =
          formElement?.getAttribute("name") ||
          formElement?.getAttribute("id") ||
          "unknown_form";

        if (window.gtag) {
          window.gtag("event", "form_interaction", {
            event_category: "form",
            event_label: formName,
            page_path: location.pathname,
          });
        }
      }
    };

    // Track video plays (if any)
    const trackVideoPlay = (event: Event) => {
      const video = event.target as HTMLVideoElement;
      const videoSrc = video.src || video.currentSrc || "unknown_video";

      if (window.gtag) {
        window.gtag("event", "video_play", {
          event_category: "engagement",
          event_label: videoSrc,
          page_path: location.pathname,
        });
      }
    };

    // Track file downloads
    const trackFileDownloads = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;

      if (
        target.href &&
        (target.href.includes(".pdf") ||
          target.href.includes(".doc") ||
          target.href.includes(".xls") ||
          target.href.includes(".zip") ||
          target.download)
      ) {
        const fileName = target.href.split("/").pop() || "unknown_file";

        if (window.gtag) {
          window.gtag("event", "file_download", {
            event_category: "download",
            event_label: fileName,
            page_path: location.pathname,
          });
        }
      }
    };

    // Set up event listeners
    const scrollInterval = setInterval(trackScrollDepth, 1000);
    const timeInterval = setInterval(trackTimeOnPage, 1000);

    document.addEventListener("click", trackImportantClicks);
    document.addEventListener("focus", trackFormInteractions, true);
    document.addEventListener("click", trackFileDownloads);

    // Video event listeners
    document.querySelectorAll("video").forEach((video) => {
      video.addEventListener("play", trackVideoPlay);
    });

    // Track page exit
    const trackPageExit = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      if (window.gtag) {
        window.gtag("event", "page_exit", {
          event_category: "engagement",
          event_label: location.pathname,
          value: timeSpent,
          max_scroll_depth: Math.round(maxScroll),
        });
      }
    };

    window.addEventListener("beforeunload", trackPageExit);

    // Cleanup
    return () => {
      clearInterval(scrollInterval);
      clearInterval(timeInterval);
      document.removeEventListener("click", trackImportantClicks);
      document.removeEventListener("focus", trackFormInteractions, true);
      document.removeEventListener("click", trackFileDownloads);
      window.removeEventListener("beforeunload", trackPageExit);

      document.querySelectorAll("video").forEach((video) => {
        video.removeEventListener("play", trackVideoPlay);
      });
    };
  }, [location]);

  return null;
};

// Hook for manual conversion tracking
export const useConversionTracking = () => {
  const trackConversion = (conversionType: string, data: any = {}) => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        event_category: "conversion",
        event_label: conversionType,
        ...data,
      });
    }

    if (window.fbq) {
      switch (conversionType) {
        case "consultation_request":
          window.fbq("track", "Lead", data);
          break;
        case "newsletter_signup":
          window.fbq("track", "Subscribe", data);
          break;
        case "resource_download":
          window.fbq("track", "ViewContent", data);
          break;
        case "contact_form":
          window.fbq("track", "Contact", data);
          break;
        case "pricing_view":
          window.fbq("track", "ViewContent", { content_type: "pricing" });
          break;
        default:
          window.fbq("track", "CustomEvent", {
            event_name: conversionType,
            ...data,
          });
      }
    }

    // Track in localStorage for analytics dashboard
    const conversions = JSON.parse(localStorage.getItem("conversions") || "[]");
    conversions.push({
      type: conversionType,
      timestamp: Date.now(),
      data,
      page: window.location.pathname,
    });
    localStorage.setItem("conversions", JSON.stringify(conversions.slice(-50))); // Keep last 50
  };

  const trackFormSubmission = (formType: string, formData: any = {}) => {
    trackConversion("form_submission", { form_type: formType, ...formData });
  };

  const trackDownload = (resourceName: string) => {
    trackConversion("resource_download", { resource_name: resourceName });
  };

  const trackSignup = (signupType: string = "newsletter") => {
    trackConversion("signup", { signup_type: signupType });
  };

  const trackPurchaseIntent = (
    package_name: string,
    estimated_value: number,
  ) => {
    trackConversion("purchase_intent", {
      package_name,
      estimated_value,
      currency: "USD",
    });
  };

  return {
    trackConversion,
    trackFormSubmission,
    trackDownload,
    trackSignup,
    trackPurchaseIntent,
  };
};

export default ConversionTracking;
