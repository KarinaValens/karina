import Head from "next/head";
import { useContext } from "react";
import About from "../components/content/About";
import { AppContext } from "../components/context/AppContext";

export default function AboutPage() {
  const { show } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>About - Karina Valens</title>
      </Head>
      {show ? " " : <About />}
    </>
  );
}
