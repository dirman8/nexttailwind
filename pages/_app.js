import "../styles/globals.css"
import "../styles/tailwind.css"
import "../styles/animate.css"
// import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  // const Main = dynamic(() => {return import("../assets/js/main.js");}, {ssr: false});
  return (
      <Component {...pageProps} />
  )
}

export default MyApp;
