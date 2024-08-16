import { useState, useEffect } from "react";

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const position = { x: window.scrollX, y: window.scrollY };
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

export default useScroll;
