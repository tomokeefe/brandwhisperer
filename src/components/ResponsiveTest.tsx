import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Tablet, Smartphone, Laptop } from "lucide-react";

interface BreakpointInfo {
  name: string;
  minWidth: number;
  maxWidth?: number;
  icon: React.ElementType;
  description: string;
  tailwindPrefix: string;
}

const ResponsiveTest = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breakpoints: BreakpointInfo[] = [
    {
      name: "Mobile",
      minWidth: 320,
      maxWidth: 639,
      icon: Smartphone,
      description: "Small screens, phones",
      tailwindPrefix: "default (no prefix)",
    },
    {
      name: "Tablet",
      minWidth: 640,
      maxWidth: 767,
      icon: Tablet,
      description: "Small tablets, large phones",
      tailwindPrefix: "sm:",
    },
    {
      name: "Tablet Large",
      minWidth: 768,
      maxWidth: 1023,
      icon: Tablet,
      description: "Medium screens, tablets",
      tailwindPrefix: "md:",
    },
    {
      name: "Desktop",
      minWidth: 1024,
      maxWidth: 1279,
      icon: Laptop,
      description: "Large screens, small desktops",
      tailwindPrefix: "lg:",
    },
    {
      name: "Desktop Large",
      minWidth: 1280,
      maxWidth: 1535,
      icon: Monitor,
      description: "Extra large screens",
      tailwindPrefix: "xl:",
    },
    {
      name: "Desktop XL",
      minWidth: 1536,
      icon: Monitor,
      description: "2XL screens and above",
      tailwindPrefix: "2xl:",
    },
  ];

  const getCurrentBreakpoint = (): BreakpointInfo => {
    for (let i = breakpoints.length - 1; i >= 0; i--) {
      const bp = breakpoints[i];
      if (
        windowWidth >= bp.minWidth &&
        (!bp.maxWidth || windowWidth <= bp.maxWidth)
      ) {
        return bp;
      }
    }
    return breakpoints[0];
  };

  const currentBreakpoint = getCurrentBreakpoint();

  // Test responsive classes for different components
  const responsiveTests = [
    {
      component: "Container",
      classes: "container-custom",
      behavior: "Max-width centers content with responsive padding",
    },
    {
      component: "Grid Layout",
      classes: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      behavior: "1 col mobile, 2 tablet, 3 desktop, 4 large desktop",
    },
    {
      component: "Navigation",
      classes: "md:flex hidden md:block",
      behavior: "Hidden on mobile, visible on desktop",
    },
    {
      component: "Typography",
      classes: "text-2xl md:text-4xl lg:text-6xl",
      behavior: "Scales from 2xl to 4xl to 6xl",
    },
    {
      component: "Spacing",
      classes: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
      behavior: "Responsive padding and margin",
    },
    {
      component: "Flexbox",
      classes: "flex flex-col sm:flex-row gap-4 lg:gap-8",
      behavior: "Column on mobile, row on tablet+",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <Card className="bg-dark-900/95 backdrop-blur border-dark-700 shadow-2xl">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-sm flex items-center space-x-2">
            <currentBreakpoint.icon className="w-4 h-4" />
            <span>Responsive Test Panel</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Breakpoint */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Current Screen:</span>
              <Badge
                className={`text-xs ${
                  currentBreakpoint.name === "Mobile"
                    ? "bg-red-500/20 text-red-400"
                    : currentBreakpoint.name.includes("Tablet")
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                }`}
              >
                {windowWidth}px
              </Badge>
            </div>
            <div className="text-white font-medium text-sm">
              {currentBreakpoint.name}
            </div>
            <div className="text-xs text-gray-400">
              {currentBreakpoint.description}
            </div>
            <div className="text-xs text-secondary-400">
              Tailwind: {currentBreakpoint.tailwindPrefix}
            </div>
          </div>

          {/* Breakpoint List */}
          <div className="space-y-1">
            <div className="text-xs text-gray-400 mb-2">All Breakpoints:</div>
            {breakpoints.map((bp) => {
              const IconComponent = bp.icon;
              const isActive =
                windowWidth >= bp.minWidth &&
                (!bp.maxWidth || windowWidth <= bp.maxWidth);

              return (
                <div
                  key={bp.name}
                  className={`flex items-center space-x-2 text-xs px-2 py-1 rounded ${
                    isActive
                      ? "bg-secondary-500/20 text-secondary-400"
                      : "text-gray-500"
                  }`}
                >
                  <IconComponent className="w-3 h-3" />
                  <span className="flex-1">{bp.name}</span>
                  <span>{bp.minWidth}px+</span>
                </div>
              );
            })}
          </div>

          {/* Responsive Class Tests */}
          <div className="space-y-2">
            <div className="text-xs text-gray-400">Component Tests:</div>
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {responsiveTests.map((test, index) => (
                <div
                  key={index}
                  className="text-xs p-2 bg-dark-800/50 rounded border border-dark-600"
                >
                  <div className="text-white font-medium mb-1">
                    {test.component}
                  </div>
                  <div className="text-gray-400 mb-1 font-mono text-[10px]">
                    {test.classes}
                  </div>
                  <div className="text-gray-500 text-[10px]">
                    {test.behavior}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Grid Test */}
          <div className="space-y-2">
            <div className="text-xs text-gray-400">Grid Test:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="bg-primary-500/20 text-primary-400 text-xs p-1 text-center rounded"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          {/* Test Actions */}
          <div className="flex space-x-1">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 text-xs h-7 border-dark-600 text-gray-300"
              onClick={() => {
                console.log("Current breakpoint:", currentBreakpoint);
                console.log("Window width:", windowWidth);
              }}
            >
              Log Info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResponsiveTest;
