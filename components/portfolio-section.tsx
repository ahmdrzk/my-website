import SectionHeading from "./section-heading";
import ProjectCard from "./project-card";

import data from "../data/data.json";

type PortfolioSectionProps = {
  id: string;
};

const PortfolioSection = ({ id }: PortfolioSectionProps) => {
  return (
    <section id={id}>
      <SectionHeading as="h2">Portfolio</SectionHeading>
      <div className="portfolio-section-projects">
        {data.projects.map(({ title, image, technologies, repo, host }, index) => (
          <ProjectCard key={index} title={title} image={image} technologies={technologies} repo={repo} host={host} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
