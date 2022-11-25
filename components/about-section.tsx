import SectionHeading from "./section-heading";
import CircularProgressBar from "./circular-progress-bar";
import ProgressBar from "./progress-bar";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

import data from "../data/data.json";

type AboutSectionProps = {
  id: string;
};

const AboutSection = ({ id }: AboutSectionProps) => {
  const { animatedElement } = useAnimateOnScroll<HTMLDivElement>("slide-up");

  return (
    <section id={id}>
      <SectionHeading as="h2">About Me</SectionHeading>

      <div ref={animatedElement} className="about-section">
        <div className="about-section__text">
          <p>{data["about-para"]}</p>

          {Object.entries(data["about-info"]).map(([label, value], index) => (
            <p key={index} className="about-section__info-item">
              <span>{label}:</span> <span>{value}</span>
            </p>
          ))}
        </div>

        <h3 className="about-section__sub-heading">My Skills</h3>

        <div className="about-section__stacks">
          {data.stacks.map(({ label, percentage }, index) => (
            <CircularProgressBar key={index} label={label} percentage={parseInt(percentage)} />
          ))}
        </div>

        <div className="about-section__technologies">
          {data.technologies.map(({ label, percentage }, index) => (
            <ProgressBar key={index} label={label} percentage={parseInt(percentage)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
