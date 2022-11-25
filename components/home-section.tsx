import { MdArrowDownward } from "react-icons/md";
import Avatar from "./avatar";
import SocialButton from "./social-button";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
import useTypeText from "../hooks/useTypingText";

import data from "../data/data.json";

type HomeSectionProps = {
  id: string;
};

const HomeSection = ({ id }: HomeSectionProps) => {
  const { animatedElement } = useAnimateOnScroll<HTMLDivElement>("slide-left");
  const { typingText, currentFullText, isIdlePhase } = useTypeText(data["typing-intro-heading"]);

  return (
    <section id={id} className="home-section-bg-image">
      <div className="home-section-overlay">
        <div className="home-section">
          <Avatar />
          <div ref={animatedElement}>
            <h1 className="home-section__heading">
              Hi, I am{" "}
              <span className="typing-text" aria-label={currentFullText}>
                {typingText}
              </span>
              <strong className={`typing-cursor ${isIdlePhase && "typing-cursor-animation"}`}>|</strong>
            </h1>
            <p className="home-section__summary-text">{data["intro-para"]}</p>
          </div>
          <div className="home-section__social-buttons">
            <SocialButton socialType="linkedin" href={data.social.linkedin} />
            <SocialButton socialType="github" href={data.social.github} />
            <SocialButton socialType="facebook" href={data.social.facebook} />
          </div>
        </div>
        <a href="#about" className="scroll-down-button">
          <span className="scroll-down-button__text">Scroll</span>
          <MdArrowDownward className="scroll-down-button__icon" />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
