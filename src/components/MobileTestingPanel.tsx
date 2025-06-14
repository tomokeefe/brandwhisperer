import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Tablet,
  Monitor,
  Info,
  CheckCircle,
  AlertTriangle,
  X,
  Eye,
  EyeOff,
} from "lucide-react";
import { cn } from "@/lib/utils";
import mobileOptimization from "@/utils/mobileOptimization";

interface DeviceInfo {
  userAgent: string;
  screenWidth: number;
  screenHeight: number;
  devicePixelRatio: number;
  touchSupport: boolean;
  orientation: "portrait" | "landscape";
  platform: string;
}

interface TouchTargetTest {
  selector: string;
  name: string;
  minSize: number;
  found: boolean;
  actualSize?: { width: number; height: number };
  passes: boolean;
}

const MobileTestingPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [touchTargetTests, setTouchTargetTests] = useState<TouchTargetTest[]>(
    [],
  );
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);

  // Only show in development
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (!isDevelopment) return;

    // Gather device information
    const gatherDeviceInfo = () => {
      const info: DeviceInfo = {
        userAgent: navigator.userAgent,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        devicePixelRatio: window.devicePixelRatio || 1,
        touchSupport: mobileOptimization.isTouchDevice(),
        orientation:
          window.innerHeight > window.innerWidth ? "portrait" : "landscape",
        platform: navigator.platform,
      };
      setDeviceInfo(info);
    };

    // Test touch targets
    const testTouchTargets = () => {
      const tests: TouchTargetTest[] = [
        {
          selector: "button",
          name: "Buttons",
          minSize: mobileOptimization.TOUCH_TARGETS.minimum,
          found: false,
          passes: false,
        },
        {
          selector: "a",
          name: "Links",
          minSize: mobileOptimization.TOUCH_TARGETS.minimum,
          found: false,
          passes: false,
        },
        {
          selector: '[role="button"]',
          name: "Interactive Elements",
          minSize: mobileOptimization.TOUCH_TARGETS.minimum,
          found: false,
          passes: false,
        },
        {
          selector: "input, textarea, select",
          name: "Form Controls",
          minSize: mobileOptimization.TOUCH_TARGETS.minimum,
          found: false,
          passes: false,
        },
      ];

      tests.forEach((test) => {
        const elements = document.querySelectorAll(test.selector);
        if (elements.length > 0) {
          test.found = true;
          let allPass = true;

          elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.width < test.minSize || rect.height < test.minSize) {
              allPass = false;
            }
          });

          test.passes = allPass;
          if (elements.length > 0) {
            const firstElement = elements[0].getBoundingClientRect();
            test.actualSize = {
              width: firstElement.width,
              height: firstElement.height,
            };
          }
        }
      });

      setTouchTargetTests(tests);
    };

    // Performance metrics
    const gatherPerformanceMetrics = () => {
      if ("performance" in window) {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        setPerformanceMetrics({
          domContentLoaded: navigation.domContentLoadedEventEnd,
          loadComplete: navigation.loadEventEnd,
          firstPaint: performance
            .getEntriesByType("paint")
            .find((entry) => entry.name === "first-paint")?.startTime,
          firstContentfulPaint: performance
            .getEntriesByType("paint")
            .find((entry) => entry.name === "first-contentful-paint")
            ?.startTime,
        });
      }
    };

    gatherDeviceInfo();
    testTouchTargets();
    gatherPerformanceMetrics();

    const handleResize = () => {
      gatherDeviceInfo();
      testTouchTargets();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDevelopment]);

  if (!isDevelopment) return null;

  const getDeviceType = () => {
    if (!deviceInfo) return "unknown";
    if (deviceInfo.screenWidth < 768) return "mobile";
    if (deviceInfo.screenWidth < 1024) return "tablet";
    return "desktop";
  };

  const getDeviceIcon = () => {
    const type = getDeviceType();
    switch (type) {
      case "mobile":
        return <Smartphone className="w-4 h-4" />;
      case "tablet":
        return <Tablet className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const formatTime = (time?: number) => {
    return time ? `${Math.round(time)}ms` : "N/A";
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      {!isVisible ? (
        <Button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          size="sm"
        >
          <Eye className="w-5 h-5" />
        </Button>
      ) : (
        <Card className="w-80 max-h-96 overflow-y-auto bg-dark-900 border-dark-700 text-white shadow-2xl">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                {getDeviceIcon()}
                Mobile Debug Panel
              </CardTitle>
              <Button
                onClick={() => setIsVisible(false)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Device Info */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Device Info
              </h4>
              {deviceInfo && (
                <div className="text-xs space-y-1 text-gray-300">
                  <div>
                    Type: <Badge variant="outline">{getDeviceType()}</Badge>
                  </div>
                  <div>
                    Screen: {deviceInfo.screenWidth}×{deviceInfo.screenHeight}
                  </div>
                  <div>DPR: {deviceInfo.devicePixelRatio}</div>
                  <div>
                    Touch:{" "}
                    {deviceInfo.touchSupport ? (
                      <CheckCircle className="w-3 h-3 inline text-green-400" />
                    ) : (
                      <X className="w-3 h-3 inline text-red-400" />
                    )}
                  </div>
                  <div>Orientation: {deviceInfo.orientation}</div>
                </div>
              )}
            </div>

            {/* Touch Target Tests */}
            <div>
              <h4 className="font-semibold mb-2">Touch Target Tests</h4>
              <div className="space-y-2">
                {touchTargetTests.map((test, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{test.name}</span>
                    <div className="flex items-center gap-2">
                      {test.found ? (
                        test.passes ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        )
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      {test.actualSize && (
                        <span className="text-xs text-gray-400">
                          {Math.round(test.actualSize.width)}×
                          {Math.round(test.actualSize.height)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            {performanceMetrics && (
              <div>
                <h4 className="font-semibold mb-2">Performance</h4>
                <div className="text-xs space-y-1 text-gray-300">
                  <div>
                    DOM: {formatTime(performanceMetrics.domContentLoaded)}
                  </div>
                  <div>Load: {formatTime(performanceMetrics.loadComplete)}</div>
                  <div>FP: {formatTime(performanceMetrics.firstPaint)}</div>
                  <div>
                    FCP: {formatTime(performanceMetrics.firstContentfulPaint)}
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div>
              <h4 className="font-semibold mb-2">Quick Actions</h4>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="text-xs"
                >
                  Reload
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    console.log("Device Info:", deviceInfo);
                    console.log("Touch Tests:", touchTargetTests);
                    console.log("Performance:", performanceMetrics);
                  }}
                  className="text-xs"
                >
                  Log Data
                </Button>
              </div>
            </div>

            {/* Responsive Breakpoints */}
            <div>
              <h4 className="font-semibold mb-2">Breakpoints</h4>
              <div className="flex flex-wrap gap-1">
                {Object.entries(mobileOptimization.BREAKPOINTS).map(
                  ([name, width]) => (
                    <Badge
                      key={name}
                      variant={
                        window.innerWidth >= width ? "default" : "outline"
                      }
                      className="text-xs"
                    >
                      {name}: {width}px
                    </Badge>
                  ),
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MobileTestingPanel;
