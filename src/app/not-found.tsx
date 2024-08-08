"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./not-found.module.css";

const NotFound = () => {
  const starsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;

      if (starsContainer) {
        for (let i = 0; i < 100; i += 1) {
          const star = document.createElement("div");
          star.className = styles["not-found__star"];
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 2}s`;
          starsContainer.appendChild(star);
        }
      }
    };

    createStars();
  }, []);

  return (
    <div className={styles["not-found"]}>
      <div className={styles["not-found__content"]}>
        <div className={styles["not-found__astronaut"]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <ellipse cx="100" cy="115" rx="55" ry="75" fill="#f0f0f0" />
            <circle cx="100" cy="70" r="50" fill="#f0f0f0" />
            <path d="M70 70 Q100 20 130 70" fill="#87ceeb" stroke="#c0c0c0" strokeWidth="2" />
            <path
              d="M45 115 Q25 130 30 170"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M155 115 Q175 130 170 170"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M80 185 Q90 205 100 185"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M120 185 Q110 205 100 185"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <rect x="70" y="100" width="60" height="80" rx="10" fill="#c0c0c0" />
            <path
              d="M130 100 Q150 90 140 70"
              fill="none"
              stroke="#a0a0a0"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className={styles["not-found__title"]}>404</h1>
        <p className={styles["not-found__text"]}>Oops! Looks like this page got lost in space.</p>
        <p className={styles["not-found__text"]}>
          Let&apos;s navigate back to{" "}
          <Link className={styles["not-found__link"]} href="/">
            Earth
          </Link>
          .
        </p>
      </div>
      <div ref={starsRef} className={styles["not-found__stars"]} />
    </div>
  );
};

export default NotFound;
