import classes from "./Statement.module.css";

const Statement = () => {
    return (
        <div className={classes.statementContainer}>
            <h2>Pourquoi une Petite académie du goût ? </h2>
            <div className={classes.statistics}>
                <ul>
                    <li>
                        <p>
                            <span id={classes.obesityPercentage}>17%</span><br/>
                            de la population française est en situation d’obésité
                        </p>
                    </li>
                    <li>
                        <p>
                            <span id={classes.obesityFraction}>1 enfant sur 5</span><br/>
                        est en surpoids
                        </p>
                    </li>
                    <li>
                        <p>
                            <span id={classes.obesityRecognition}>1 enfant sur 3</span><br/>
                        ne sait pas reconnaître une courgette
                        </p>
                    </li>
                </ul>
            </div>
            <p>Bien manger est un véritable défi de nos jours, avec 1 Français sur 2 qui considère qu’il est difficile d’adopter une alimentation saine au quotidien
</p>
        </div>
    )

}

export default Statement;