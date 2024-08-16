import React from "react";
import { useInView } from "react-intersection-observer";
import "./Reveal.css";

const Reveal = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.02,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={inView ? "reveal active-scroll" : "reveal"}>
      {children}
    </div>
  );
};

export default Reveal;
