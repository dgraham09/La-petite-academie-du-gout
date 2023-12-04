import classes from "./FinancialInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faKitchenSet } from "@fortawesome/free-solid-svg-icons";

const FinancialInfo = () => {
  return (
    <div className={classes.financeContainer}>
      <div className={classes.financeCard}>
        <FontAwesomeIcon icon={faUtensils} size="2xl" />
        <div className={classes.textContainer}>
          <h2>1 place gratuite</h2>
          <p>
            Conscients du coût que les activités extra-scolaires représentent
            pour les familles, nous souhaitons permettre aux foyers les plus
            modestes de bénéficier de ce programme en offrant une place pour
            chaque école
          </p>
        </div>
      </div>
      <div className={classes.financeCard}>
        <div className={classes.textContainer}>
          <h2>Subventions</h2>
          <p>
            Nous oeuvrons à récolter des subventions publiques et privées afin
            de soutenir notre projet, ce qui permettra un accès plus large à la
            Petite académie du goût
          </p>
        </div>
        <FontAwesomeIcon icon={faKitchenSet} size="2xl" style={{color: "#5a867b",}} />
      </div>
    </div>
  );
};

export default FinancialInfo;
