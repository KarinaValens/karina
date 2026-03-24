import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div style={isHome ? {} : { display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={isHome ? {} : { flex: 1 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
