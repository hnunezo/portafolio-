import { useEffect, useState } from "react";

const useActiveSection = (refsMap) => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const entries = Object.entries(refsMap).filter(([, ref]) => ref?.current);
    if (!entries.length) return;

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const match = entries.find(([, ref]) => ref.current === visible[0].target);
          if (match) setActive(match[0]);
        }
      },
      { threshold: [0.25, 0.45, 0.6], rootMargin: "-20% 0px -35% 0px" }
    );

    entries.forEach(([, ref]) => observer.observe(ref.current));
    return () => observer.disconnect();
  }, [refsMap]);

  return active;
};

export default useActiveSection;
