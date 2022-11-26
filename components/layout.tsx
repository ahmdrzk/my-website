import { useState } from "react";
import Link from "next/link";
import PrimaryNav from "./primary-nav";

import data from "../data/data.json";

type LayoutProps = {
  className: string;
  children: React.ReactNode;
};

const Layout = ({ className, children }: LayoutProps) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div className={`root ${className}`}>
      <header>
        <div className="header-content">
          <div className="logo">
            <Link href="/">
              AHMDRZK<span>.</span>
              <span>COM</span>
            </Link>
          </div>
          <PrimaryNav isSideNavOpen={isSideNavOpen} setIsSideNavOpen={setIsSideNavOpen} />
        </div>
      </header>
      <main className={isSideNavOpen ? "prevent-scroll" : ""}>{children}</main>
      <footer>
        <div className="footer-content">
          <p>
            © 2022 <a href={`https://${data.domain}`}>{data.domain}</a>. All rights reserved.
          </p>
          <p>
            Background images{" "}
            <a
              href="https://www.freepik.com/free-vector/egypt-pharaoh-tomb-treasury-full-gold-coins_4394150.htm#page=2&query=hieroglyphs&position=46&from_view=search&track=sph"
              target="_blank"
              rel="noreferrer"
            >
              by vectorpouch
            </a>{" "}
            &{" "}
            <a
              href="https://www.freepik.com/free-vector/egyptian-pyramids-night-landscape-cartoon_4394561.htm"
              target="_blank"
              rel="noreferrer"
            >
              by vectorpocket
            </a>{" "}
            on Freepik
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
