import Image from "next/image";
import { useRef, useEffect } from "react";
import kitchenutensils from "../../../Assets/kitchenutensils.svg";
import kitchenUtensilsOutline from "../../../Assets/kitchenutensilOutline.svg";
// import kitchenUtensilsOutline from "../../../public/kitchenutensilOutline.svg";
import classes from "./index.module.css";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin);

  //   gsap.from(outlineLogoRef.current, {
  //     drawSVG: 0,
  //     duration: 20,
  //   });
  // }, []);

  // return (
  //   <div className={classes.logoContainer}>
  //     {/* <Image src={kitchenUtensilsOutline} width="500" height="500"/> */}
  //     <svg
  //       className={classes.svgContainer}
  //       width="500"
  //       height="500"
  //       viewBox="0 0 100 100"
  //     >
  //       <path
  //         ref={outlineLogoRef}
  //         
  //         fill-rule="evenodd"
  //         stroke="#000"
  //         strokeWidth="20"
  //       />
  //     </svg>
  //   </div>
  // );

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 5,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      });
  }, []);

  return (
    <>
      <div className={classes.logoContainer} ref={bgRef}>
        {/* <Image
          className={classes.solidLogo}
          src={kitchenutensils}
          alt="utensils"
          ref={solidLogoRef}
        /> */}
        <h1 className="company-name">La Petite Academie Du Gout</h1>
        <Image
          className={classes.svgContainer}
          src={kitchenUtensilsOutline}
          alt="utensils-outline"
          ref={outlineLogoRef}
        />
      <p><span>Apprendre aux enfants à se nourrir</span> sainement et avec goût</p>
    </div>
  </>
  )

};

export default Logo;
