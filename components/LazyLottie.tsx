'use client';

import { useEffect, useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

type LazyLottieProps = {
  animationData: object;
  className?: string;
  loop?: boolean;
  style?: React.CSSProperties;
};

export default function LazyLottie({ className, animationData, loop = true, style }: LazyLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          lottieRef.current?.play();
        } else {
          lottieRef.current?.pause();
        }
      },
      { rootMargin: '120px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} style={style} aria-hidden={!shouldRender}>
      {shouldRender && (
        <Lottie
          animationData={animationData}
          lottieRef={lottieRef}
          autoplay
          loop={loop}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}
