import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Anchor from "./Anchor";
import Burguer from "./Burguer";

export default function Nav() {
  const { show } = useContext(AppContext);

  return (
    <>
      <nav>
        <div id="nav-mobil" className="flex">
          <Anchor href={"/"}>
            <Image src={"/media/images/logo.png"} width={50} height={50} alt="logo" sizes="(max-width: 700px) 100vw, 700px" />
          </Anchor>
          <Burguer />
        </div>
        {show ? (
          <ul className="menus flex">
            <Anchor className="single-menu" href={"/"}>
              HOME
            </Anchor>
            <Anchor className="single-menu" href={"/projects"}>
              PROJECTS
            </Anchor>
            {/*             <Anchor  onClick={()=>setShow(!show)} href={"/about"}>ABOUT</Anchor>
             */}
          </ul>
        ) : (
          false
        )}
      </nav>
    </>
  );
}
