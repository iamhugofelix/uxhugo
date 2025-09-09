// This component was created by AI as I had no idea of how to make this happen just yet...

import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
  }, [pathname]);

  return null; // this component doesn't render anything
}