type NavLinkProps = {
  href: string;
  children: string;
  closeSideNav: () => void;
  onClick?: (event: React.MouseEvent) => void;
};

const NavLink = ({ href, children, closeSideNav, onClick }: NavLinkProps) => {
  const onClickHandler = (e: React.MouseEvent) => {
    closeSideNav();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <li onClick={onClickHandler}>
      <a href={href} className="nav-link">
        {children}
      </a>
    </li>
  );
};

export default NavLink;
