import { useEffect, useState } from "react";

type CircularProgressBarProps = {
  label: string;
  percentage: number;
};

const CircularProgressBar = ({ label, percentage }: CircularProgressBarProps) => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    if (currentPercent < percentage) {
      setTimeout(() => {
        setCurrentPercent((prevState) => prevState + 5);
      }, 100);
    }
  }, [currentPercent, percentage]);

  return (
    <div className={`circular-progress-bar-${percentage}`}>
      <div>
        <div>
          <span>{currentPercent}%</span>
        </div>
      </div>
      <h5>{label}</h5>
    </div>
  );
};

export default CircularProgressBar;
