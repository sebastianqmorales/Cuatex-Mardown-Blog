import Header from "../components/Header";
// import '../styles/globals.css'
import "../styles/teststyle.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
