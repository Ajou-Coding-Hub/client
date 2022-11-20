import { useInView } from "react-intersection-observer";
import { useAnimation as useFramerAnimation, Variants } from "framer-motion";
import { useEffect, useMemo } from "react";

const fadeIn: Variants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

type AnimationType = "fade";

export const useAnimation = (type: AnimationType) => {
  const controls = useFramerAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const animation: Variants = useMemo(() => {
    switch (type) {
      case "fade":
        return fadeIn;
      default:
        return fadeIn;
    }
  }, []);

  return { ref, animate: controls, initial: "hidden", variants: animation };
};
