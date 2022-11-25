import { useRef } from "react";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

type ProgressBarProps = {
  label: string;
  percentage: number;
};

const ProgressBar = ({ label, percentage }: ProgressBarProps) => {
  const percentBarElement = useRef<HTMLDivElement>(null!);
  const { animatedElement, isInView } = useAnimateOnScroll<HTMLDivElement>("slide-up");

  return (
    <div ref={animatedElement} className="progress-bar">
      <div className="progress-bar__text">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar__full">
        <div
          ref={percentBarElement}
          style={isInView ? { width: `${percentage}%` } : {}}
          className="progress-bar__current"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
