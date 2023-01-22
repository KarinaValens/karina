import Layout from "../components/navigation/Layout";
import "../styles/globals.css";
import AppContextProvider from "../components/context/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
