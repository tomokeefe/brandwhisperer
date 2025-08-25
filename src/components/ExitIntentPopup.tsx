import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X, Download, CheckCircle, Clock, Star } from "lucide-react";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let exitIntentTimeout: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown && !isSubmitted) {
        exitIntentTimeout = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      if (exitIntentTimeout) {
        clearTimeout(exitIntentTimeout);
      }
    };

    // Also trigger on scroll up behavior (mobile-friendly)
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        currentScrollY < lastScrollY &&
        currentScrollY < 100 &&
        !hasShown &&
        !isSubmitted
      ) {
        setIsOpen(true);
        setHasShown(true);
      }
      lastScrollY = currentScrollY;
    };

    // Time-based trigger (after 45 seconds)
    const timeoutTrigger = setTimeout(() => {
      if (!hasShown && !isSubmitted) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(exitIntentTimeout);
      clearTimeout(timeoutTrigger);
    };
  }, [hasShown, isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);

      // Track conversion
      if (window.gtag) {
        window.gtag("event", "lead_generation", {
          event_category: "exit_intent",
          event_label: "brand_assessment_download",
        });
      }
    }, 1000);
  };

  const handleClose = () => {
    setIsOpen(false);

    // Track dismissal
    if (window.gtag) {
      window.gtag("event", "popup_dismissed", {
        event_category: "exit_intent",
        event_label: "brand_assessment_popup",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] bg-dark-900 border-dark-700 text-white">
        <DialogHeader>
          <Badge className="bg-secondary-500/20 text-secondary-400 border-secondary-500/30 mb-2 w-fit">
            Wait! Don't Leave Empty-Handed
          </Badge>
          <DialogTitle className="text-2xl font-bold text-white">
            {isSubmitted
              ? "Your Brand Assessment is Ready!"
              : "Get Your Free Startup Brand Assessment"}
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            {isSubmitted
              ? "Check your email for the download link. We've also included bonus resources!"
              : "Before you go, grab our 50-point brand readiness checklist used by Series A startups."}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Download Sent!
              </h3>
              <p className="text-gray-300 mb-4">
                Your Brand Assessment is in your inbox along with 3 bonus
                resources.
              </p>
            </div>

            <div className="bg-dark-800 rounded-lg p-4 space-y-3">
              <h4 className="font-semibold text-white">What you'll get:</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                  <span>50-point Brand Readiness Assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                  <span>Series A Brand Preparation Guide</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                  <span>Brand ROI Calculator Tool</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                  <span>Weekly startup branding insights</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1 bg-secondary-500 hover:bg-secondary-600 text-dark-900"
              >
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="flex-1 border-dark-600 text-gray-300 hover:bg-dark-800"
              >
                Continue Browsing
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-dark-800 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary-400/10 border border-secondary-400/20 rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Brand Assessment</h4>
                  <p className="text-sm text-gray-400">
                    50-point evaluation framework
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="flex items-center justify-center space-x-1">
                  <Download className="w-3 h-3 text-secondary-400" />
                  <span className="text-gray-400">2,847 downloads</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-3 h-3 text-secondary-400" />
                  <span className="text-gray-400">4.9/5 rating</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <Clock className="w-3 h-3 text-secondary-400" />
                  <span className="text-gray-400">5 min read</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="popup-email" className="text-white text-sm">
                  Enter your email for instant access:
                </Label>
                <Input
                  id="popup-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-800 border-dark-600 text-white mt-2"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold"
                disabled={!email}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Free Assessment
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-sm text-gray-400 hover:text-gray-300 underline"
                >
                  No thanks, I'll continue browsing
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center">
              <p>No spam, unsubscribe anytime. Used by 150+ funded startups.</p>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
