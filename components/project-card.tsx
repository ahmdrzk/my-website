import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

type ProjectCardProps = {
  title: string;
  image: string;
  technologies: string[];
  repo: string;
  host?: string;
};

const ProjectCard = ({ title, image, technologies, repo, host }: ProjectCardProps) => {
  const { animatedElement } = useAnimateOnScroll<HTMLElement>("slide-up");

  return (
    <figure ref={animatedElement} className="project-card">
      <div className="project-card__image-container project-image-curtain">
        <Image src={image} alt={title} fill className="project-card__image" />
      </div>

      <div className="project-card__links">
        <a href={repo} target="_blank" rel="noreferrer">
          <span>
            <SiGithub />
          </span>
        </a>
        {host && (
          <a href={host} target="_blank" rel="noreferrer">
            <span>
              <HiOutlineExternalLink />
            </span>
          </a>
        )}
      </div>

      <figcaption className="project-card__caption">
        <h5>{title}</h5>
        <p>{technologies.join(", ")}</p>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
