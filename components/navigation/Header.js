import Nav from "./Nav";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/router";

export default function Header() {
  const { show } = useContext(AppContext);
  const router = useRouter();

  if (router.pathname === "/") return null;

  return (
    <header>
      <Nav />
    </header>
  );
}
