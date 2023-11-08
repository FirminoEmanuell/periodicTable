import React from "react";
import { Desktop } from "../pages/PeriodicTable-desktop";
import { Mobile } from "../pages/PeriodicTable-mobile";

export function ScreenDetect() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 1000);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    handleResize();
  }, []);
  return isMobile ? <Mobile /> : <Desktop />;
}
