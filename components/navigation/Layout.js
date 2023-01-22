import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
