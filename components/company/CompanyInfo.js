import classes from "./CompanyInfo.module.css";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const CompanyInfo = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const boxes = gsap.utils.toArray(`.${classes.accordion}`);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${classes.accordions}`,
        pin: true,
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });

    boxes.forEach((box, i) => {
      tl.to(
        box.querySelector(`.${classes.text}`),
        {
          height: 0,
          paddingBottom: 0,
          opacity: 0,
        },
        i * 0.5,
      );

      tl.to(
        box,
        {
          marginBottom: -15,
        },
        "<",
      );
    });
  });

  return (
    <div className={classes.infoContainer}>
      <h1>L'organisation et nos ateliers</h1>
      <div id="wrapper">
        <div id="content">
          <div className={classes.spacer}></div>
          <div className={classes.accordions}>
            <div className={classes.accordion}>
              <div className={classes.title}>Un programme sur l'année</div>
              <div className={classes.text}>
                <p>
                  Un <strong>atelier hebdomadaire</strong> d’1h30 pendant
                  l’année scolaire.
                </p>

                <p>
                  L’activité se déroule sur le temps périscolaire de 17h à 18h30
                </p>
              </div>
            </div>
            <div className={classes.accordion}>
              <div className={classes.title}> Un contenu riche et complet</div>
              <div className={classes.text}>
                <p>
                  <strong>Exploration</strong> des produits
                </p>
                <p>
                  <strong>Manipulation</strong> en toute sécurité des
                  équipements de cuisine
                </p>
                <p>
                  <strong>Dégustation</strong> de la recette du jour
                </p>
              </div>
            </div>
            <div className={classes.accordion}>
              <div className={classes.title}>Des encadrants talentueux</div>
              <div className={classes.text}>
                <p>
                  Chaque Maestro est un <strong>ambassadeur</strong>de la
                  cuisine saine et savoureuse avec un bagage en{" "}
                  <strong>nutrition</strong>
                </p>
                <p>
                  Une équipe <strong>bienveillante, engagée</strong> qui
                  transmet avec <strong>passion</strong>
                  aux enfants
                </p>
              </div>
            </div>
            {/* <div className={classes.accordion}>
              <div className={classes.title}>Pretty everywhere.</div>
              <div className={classes.text}>
                Join superfast 5G wireless networks when you’re on the go.
                Download files, play multiplayer games, stream movies, check in
                with friends, and more.
              </div>
            </div> */}
          </div>
          <div className={classes.spacer}></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
