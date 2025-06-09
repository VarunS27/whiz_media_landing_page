import { useEffect, useState } from "react";

export const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["about", "services", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount too

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
};
