type childrenProp = {
  children: React.ReactNode;
};

type ButtonAsLinkProps = childrenProp & {
  href: string;
  closeSideNav?: () => void;
  onClick?: never;
};

type ButtonAsButtonProps = childrenProp & {
  onClick?: (event: React.MouseEvent) => void;
  href?: never;
  closeSideNav?: never;
};

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const Button = ({ children, href, onClick, closeSideNav }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} onClick={closeSideNav} className="button">
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
