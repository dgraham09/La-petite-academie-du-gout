import classes from "./Missions.module.css";
import Card from "../ui/Card";

const Mission = () => {
  return (
    <section className={classes.missionContainer}>
      <h1 className="animate__animated animate__pulse animate__delay-5s">
        Notre Mission
      </h1>
      <p>
        Apprendre aux enfants à se nourrir sainement, avec goût tout en prenant
        soin de notre planète, au travers d’ateliers de cuisine éducatifs et
        ludiques
      </p>
      <div className={classes.cardContainer}>
        <Card>
          <h2>Pourquoi?</h2>
          <li>
            Le surpoids et l’obésité ont doublé depuis les années 2000 :
            l’augmentation est plus forte chez les jeunes populations
          </li>
          <li>
            Bien se nourrir est plus que jamais au coeur des préoccupations des
            Français
          </li>
        </Card>
        <Card>
          <h2>Quoi?</h2>
          <li>
            Un programme d’ateliers éducatifs culinaires pour éveiller les
            enfants aux goûts et leur transmettre les fondamentaux d’une
            alimentation saine
          </li>
          <li>
            De la pratique pour développer des compétences essentielles à la vie
            quotidienne
          </li>
          <li>
            Une activité épanouissante qui renforce leur confiance en eux tout
            en s’amusant
          </li>
        </Card>
        <Card>
          <h2>Comment?</h2>
          <li>Des ateliers d’1h30 chaque semaine, sur le temps périscolaire</li>
          <li>
            Des cours ouverts à TOUS les enfants scolarisés en école maternelle
            et élémentaire
          </li>
          <li>
            Des cours financés par les parents au travers de frais
            d’inscription, avec des subventions pour les revenus les plus
            modestes
          </li>
          <li>
            Nos équipes interviennent directement dans les établissements
            scolaires (salles de classes ou salle polyvalente) avec une
            organisation gérée à 100% par nos soins
          </li>
        </Card>
      </div>
    </section>
  );
};

export default Mission;
