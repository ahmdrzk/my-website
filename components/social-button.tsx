import { SiFacebook, SiGithub, SiLinkedin, SiReact } from "react-icons/si";

type SocialButtonProps = {
  socialType: "github" | "linkedin" | "facebook";
  href: string;
};

const SocialButton = ({ socialType, href }: SocialButtonProps) => {
  let IconComponent;

  switch (socialType) {
    case "github":
      IconComponent = SiGithub;
      break;

    case "linkedin":
      IconComponent = SiLinkedin;
      break;

    case "facebook":
      IconComponent = SiFacebook;
      break;

    default:
      IconComponent = SiReact;
      break;
  }

  return (
    <a href={href} className="social-button" target="_blank" rel="noreferrer" aria-label={socialType}>
      <span>
        <IconComponent />
      </span>
    </a>
  );
};

export default SocialButton;
