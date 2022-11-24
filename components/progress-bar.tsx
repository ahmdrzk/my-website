import { useEffect, useRef } from "react";

type ProgressBarProps = {
  label: string;
  percentage: number;
};

const ProgressBar = ({ label, percentage }: ProgressBarProps) => {
  const currentBarElement = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    currentBarElement.current.style.width = `${percentage}%`;
  });

  return (
    <div className="progress-bar">
      <div className="progress-bar__text">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar__full">
        <div ref={currentBarElement} className="progress-bar__current"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
