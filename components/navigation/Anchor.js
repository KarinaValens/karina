import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Anchor({ children, href, className, target }) {
  const router = useRouter();
  const { setShow } = useContext(AppContext);

  function handleClick(e) {
    if (target === "_blank") return; // let external links open normally
    e.preventDefault();
    setShow(false); // close mobile menu on navigation
    router.push(href);
  }

  return (
    <a className={className} href={href} onClick={handleClick} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}
