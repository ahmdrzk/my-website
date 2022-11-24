import { MdClose, MdMenuOpen } from "react-icons/md";
import Button from "./button";
import NavLink from "./nav-link";

type PrimaryNavProps = {
  isSideNavOpen: boolean;
  setIsSideNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrimaryNav = ({ isSideNavOpen, setIsSideNavOpen }: PrimaryNavProps) => {
  const toggleSideNav = () => {
    setIsSideNavOpen((prevState) => !prevState);
  };

  const comingSoonAlertHandler = () => {
    window.alert("This section is coming soon!");
  };

  return (
    <>
      <button onClick={toggleSideNav} className="nav-menu-button">
        {isSideNavOpen ? <MdClose /> : <MdMenuOpen />}
      </button>
      <nav className={`nav ${isSideNavOpen ? "side-nav-open" : ""}`}>
        <ul>
          <NavLink href="/" toggleSideNav={toggleSideNav}>
            Home
          </NavLink>
          <NavLink href="#about" toggleSideNav={toggleSideNav}>
            About
          </NavLink>
          <NavLink href="#portfolio" toggleSideNav={toggleSideNav}>
            Portfolio
          </NavLink>
          <NavLink href="#" onClick={comingSoonAlertHandler} toggleSideNav={toggleSideNav}>
            Blog
          </NavLink>
          <NavLink href="#" onClick={comingSoonAlertHandler} toggleSideNav={toggleSideNav}>
            Resources
          </NavLink>
        </ul>
        <Button href="#contact">Contact Me</Button>
      </nav>
    </>
  );
};

export default PrimaryNav;
