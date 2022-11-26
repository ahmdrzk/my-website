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
  const closeSideNav = () => {
    setIsSideNavOpen(false);
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
          <NavLink href="#home" closeSideNav={closeSideNav}>
            Home
          </NavLink>
          <NavLink href="#about" closeSideNav={closeSideNav}>
            About
          </NavLink>
          <NavLink href="#portfolio" closeSideNav={closeSideNav}>
            Portfolio
          </NavLink>
          <NavLink href="#" onClick={comingSoonAlertHandler} closeSideNav={closeSideNav}>
            Blog
          </NavLink>
        </ul>
        <Button href="#contact" closeSideNav={closeSideNav}>
          Contact Me
        </Button>
      </nav>
    </>
  );
};

export default PrimaryNav;
