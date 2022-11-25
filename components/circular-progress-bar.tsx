import { useEffect, useState } from "react";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

type CircularProgressBarProps = {
  label: string;
  percentage: number;
};

const CircularProgressBar = ({ label, percentage }: CircularProgressBarProps) => {
  const [currentPercent, setCurrentPercent] = useState(0);
  const { animatedElement, isInView } = useAnimateOnScroll<HTMLDivElement>("opacity");

  useEffect(() => {
    if (isInView) {
      if (currentPercent < percentage) {
        setTimeout(() => {
          setCurrentPercent((prevState) => prevState + 5);
        }, 150);
      }
    }
  }, [isInView, currentPercent, percentage]);

  return (
    <div className={`circular-progress-bar-${percentage}`}>
      <div ref={animatedElement}>
        <div>
          <span>{currentPercent}%</span>
        </div>
      </div>
      <h5>{label}</h5>
    </div>
  );
};

export default CircularProgressBar;
