import "../styles/globals.css";
import Layout from "@/components/layout/Layout";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin-ext"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout className={sacramento.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

//special file which is root component, component prop is different on each page
