type childrenProp = {
  children: React.ReactNode;
};

type ButtonAsLinkProps = childrenProp & {
  href: string;
  onClick?: never;
};

type ButtonAsButtonProps = childrenProp & {
  onClick?: (event: React.MouseEvent) => void;
  href?: never;
};

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const Button = ({ children, href, onClick }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} className="button">
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className="button">
      <span>{children}</span>
    </button>
  );
};

export default Button;
