import Image from "next/image";
import Anchor from "./Anchor";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  if (router.pathname === "/") return null;

  return (
    <footer className="flex">
      <Anchor href="/">
        <Image width={50} height={50} src={"/media/images/logo.png"} alt="logo" sizes="(max-width: 700px) 100vw, 700px" />
      </Anchor>
      <div id="icons-footer-container" className="flex">
        <Anchor href="https://github.com/KarinaValens" target="-blank">
          <Image width={40} height={40} src={"/media/icons/github.png"} alt="github link" sizes="(max-width: 700px) 100vw, 700px" />
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/karinavalenswebdeveloper/" target="-blank">
          <Image width={40} height={40} src={"/media/icons/linkedin.png"} alt="linkeding" sizes="(max-width: 700px) 100vw, 700px" />
        </Anchor>
      </div>
    </footer>
  );
}
