"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect, useRef } from "react";
import styles from "./error.module.scss";
import clsx from "clsx";

type TError = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: TError) => {
  const router = useRouter();
  const starsRef = useRef<HTMLDivElement | null>(null);

  console.error("Error", error);

  function refreshAndReset() {
    // The use of startTransition is to avoid race conditions between the two state updates
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;

      if (starsContainer) {
        for (let i = 0; i < 100; i += 1) {
          const star = document.createElement("div");
          star.className = styles["star"];
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 2}s`;
          starsContainer.appendChild(star);
        }
      }
    };

    createStars();
  }, []);

  const getStar = (delay: number, top: number, angle: number) =>
    ({
      "--delay": `${delay}`,
      "--top": `${top}`,
      "--angle": `${angle}`,
    } as React.CSSProperties);

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles["planet"], styles["planet1"])}></div>
      <div className={clsx(styles["planet"], styles["planet2"])}></div>

      <div className={styles["shooting-star"]} style={getStar(1, 20, 15)}></div>
      <div className={styles["shooting-star"]} style={getStar(3, 50, 25)}></div>
      <div className={styles["shooting-star"]} style={getStar(5, 75, 10)}></div>

      <div className={styles["container"]}>
        <div className={styles["scene"]}>
          <div className={styles["spaceship"]}>
            <div className={clsx(styles["window"], styles["window1"])}></div>
            <div className={clsx(styles["window"], styles["window2"])}></div>
            <div className={clsx(styles["window"], styles["window3"])}></div>
            <div className={styles["damage"]}>
              <div className={clsx(styles["sparks"], styles["spark1"])}></div>
              <div className={clsx(styles["sparks"], styles["spark2"])}></div>
              <div className={clsx(styles["sparks"], styles["spark3"])}></div>
            </div>
          </div>

          <div className={styles["astronaut"]}>
            <div className={styles["cord"]}></div>
            <div className={styles["suit"]}>
              <div className={styles["helmet"]}>
                <div className={styles["visor"]}>
                  <div className={styles["reflection"]}></div>
                </div>
              </div>
              <div className={clsx(styles["arm"], styles["arm-left"])}></div>
              <div className={clsx(styles["arm"], styles["arm-right"])}>
                <div className={styles["tool"]}></div>
              </div>
              <div className={clsx(styles["leg"], styles["leg-left"])}></div>
              <div className={clsx(styles["leg"], styles["leg-right"])}></div>
            </div>
          </div>
        </div>

        <h2>Technical difficulties</h2>
        <p>
          Our navigation systems are down! Please try again or contact our base station on Earth.
        </p>
        <button className={styles["button"]} onClick={refreshAndReset}>
          Try again
        </button>
      </div>

      <div ref={starsRef} className={styles["stars"]} />
    </div>
  );
};

export default ErrorPage;
