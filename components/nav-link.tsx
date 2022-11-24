type NavLinkProps = {
  href: string;
  children: string;
  toggleSideNav: () => void;
  onClick?: (event: React.MouseEvent) => void;
};

const NavLink = ({ href, children, toggleSideNav, onClick }: NavLinkProps) => {
  const onClickHandler = (e: React.MouseEvent) => {
    toggleSideNav();
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
