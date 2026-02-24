"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  className?: string;
}

export default function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const numericMatch = value.match(/[\d,.]+/);
          if (!numericMatch) {
            setDisplay(value);
            return;
          }

          const numStr = numericMatch[0];
          const target = parseFloat(numStr.replace(/,/g, ""));
          const prefix = value.slice(0, value.indexOf(numStr));
          const suffix = value.slice(value.indexOf(numStr) + numStr.length);
          const hasComma = numStr.includes(",");
          const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

          const steps = 40;
          const stepDuration = 30;
          let step = 0;

          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            let current = target * eased;

            let formatted: string;
            if (decimals > 0) {
              formatted = current.toFixed(decimals);
            } else {
              formatted = Math.round(current).toString();
            }

            if (hasComma) {
              formatted = Number(formatted).toLocaleString("en-US", {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              });
            }

            setDisplay(`${prefix}${formatted}${suffix}`);

            if (step >= steps) {
              clearInterval(interval);
              setDisplay(value);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
