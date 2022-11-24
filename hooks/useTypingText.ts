import { useEffect, useRef, useState } from "react";

const INCREMENTING_INTERVAL = 120;
const DECREMENTING_INTERVAL = 25;
const IDLE_TIME_FULLTEXT = 3000;
const IDLE_TIME_NOTEXT = 100;

enum Phase {
  incrementing,
  decrementing,
  idle,
}

const useTypeText = (textList: string[]) => {
  const [typingText, setTypingText] = useState("");
  const [phase, setPhase] = useState(Phase.incrementing);
  const [textIndex, setTextIndex] = useState(0);
  const changingPhaseTimerId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const nextIndex = () => {
      if (textIndex < textList.length - 1) {
        setTextIndex(textIndex + 1);
      } else {
        setTextIndex(0);
      }
    };

    switch (phase) {
      case Phase.incrementing: {
        if (typingText.length === textList[textIndex].length) {
          setPhase(Phase.idle);

          changingPhaseTimerId.current = setTimeout(() => {
            setPhase(Phase.decrementing);
          }, IDLE_TIME_FULLTEXT);
        }

        const timerId = setTimeout(() => {
          setTypingText(textList[textIndex].slice(0, typingText.length + 1));
        }, INCREMENTING_INTERVAL);

        return () => clearTimeout(timerId);
      }

      case Phase.decrementing: {
        if (typingText.length === 0) {
          setPhase(Phase.idle);
          nextIndex();

          changingPhaseTimerId.current = setTimeout(() => {
            setPhase(Phase.incrementing);
          }, IDLE_TIME_NOTEXT);
        }

        const timerId = setTimeout(() => {
          setTypingText(textList[textIndex].slice(0, typingText.length - 1));
        }, DECREMENTING_INTERVAL);

        return () => clearTimeout(timerId);
      }

      default:
        return () => clearTimeout(changingPhaseTimerId.current);
    }
  }, [textList, typingText.length, phase, textIndex]);

  return { typingText, currentFullText: textList[textIndex], isIdlePhase: phase === Phase.idle };
};

export default useTypeText;
