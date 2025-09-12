// Created this with AI to help always scroll to the top of the page when moving around the page.

import { useEffect } from "react";
import { useLocation } from "react-router";


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
