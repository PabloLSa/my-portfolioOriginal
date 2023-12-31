import { useInView } from "framer-motion";
import { useRef } from "react";


function MenuMotion({ children } : any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}
      >
        {children}
      </div>
    </section>
    
  );
}
export default MenuMotion;