import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Anchor from "./Anchor";
import Burguer from "./Burguer";

export default function Nav() {

const {show} = useContext(AppContext)

  return (
    <>
    <nav >
        <div id="nav-mobil" className="flex">
         <Image  src={"/media/images/logo.png"} width={50} height={50} alt="logo" sizes="(max-width: 700px) 100vw, 700px"/>
         <Burguer/>
        </div>
         {show ? <ul className="menus flex">
            <Anchor  href={"/"}>HOME</Anchor>
            <Anchor  href={"/projects"}>PROJECTS</Anchor>
            <Anchor  href={"/about"}>ABOUT</Anchor>
        </ul>:  false}        
        
    </nav>   
    
    </>  )
}

 