import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import Image from "next/image";
// import KitchenUtensils from "../../Assets/KitchenUtensils.svg";
import { Sacramento } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import 'animate.css';

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {/* <Image src={kitchenutensilOutline} />
      <Image src={kitchenutenstils} /> */}
      {/* <Image src={KitchenUtensils} alt="kitchen-utensils" /> */}
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
