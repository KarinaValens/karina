import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../context/AppContext";
import Burguer from "./Burguer";

export default function Layout({ children }) {
  const router = useRouter();
  const { show, setShow } = useContext(AppContext);

  const handleNavClick = () => {
    setShow(false);
  };

  return (
    <div className="site-layout">
      <div className="home-sidebar">
        <div className="sidebar-logo">
          <Link href="/" onClick={handleNavClick}>
            <Image src="/media/images/logo.png" width={40} height={40} alt="logo" />
          </Link>
        </div>
        <div className="sidebar-links">
          <Link href="/about" className="sidebar-link">
            About Me
          </Link>
          <Link href="/projects" className="sidebar-link">
            Projects
          </Link>
        </div>
        <div className="sidebar-social">
          <a href="https://github.com/KarinaValens" target="_blank" rel="noreferrer">
            <Image width={24} height={24} src="/media/icons/github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/karinavalenswebdeveloper/" target="_blank" rel="noreferrer">
            <Image width={24} height={24} src="/media/icons/linkedin.png" alt="linkedin" />
          </a>
        </div>
        <div className="burguer-wrapper">
          <Burguer />
        </div>
      </div>

      {show ? (
        <div className="mobile-menu">
          <Link className="mobile-menu-link" href="/" onClick={handleNavClick}>HOME</Link>
          <Link className="mobile-menu-link" href="/about" onClick={handleNavClick}>ABOUT ME</Link>
          <Link className="mobile-menu-link" href="/projects" onClick={handleNavClick}>PROJECTS</Link>
          <div className="mobile-menu-social">
            <a href="https://github.com/KarinaValens" target="_blank" rel="noreferrer">
              <Image width={28} height={28} src="/media/icons/github.png" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/karinavalenswebdeveloper/" target="_blank" rel="noreferrer">
              <Image width={28} height={28} src="/media/icons/linkedin.png" alt="linkedin" />
            </a>
          </div>
        </div>
      ) : (
        <div className="site-content">
          {children}
        </div>
      )}
    </div>
  );
}
