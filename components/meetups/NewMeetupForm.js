import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const companyInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      name: enteredName,
      email: enteredEmail,
      companyName: enteredCompany,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <div className={classes.contactForm}>
      <div className={classes.instructions}>
        <h3>
          Notre projet vous touche ? Vous souhaitez proposer cette activité
          éducative et ludique au sein de votre école ?
        </h3>
        <p>C’est très simple ! Il vous faut :</p>
        <ul>
          <li>
            1) Identifier un ou deux créneaux libres d’1h30 sur le temps
            périscolaire
          </li>
          <li>
            2) Identifier une salle pouvant accueillir un groupe de 10 élèves
            avec un point d’eau à proximité
          </li>
        </ul>
        <p>Nous nous chargeons du reste ! </p>
        <h3>La Suite</h3>
        <li>
          Nous venons à votre rencontre pour vous présenter le projet plus en
          détail, et préparer le lancement au sein de votre école !
        </li>
        <p>
          Pour nous contacter : 06 42 77 69 01 deborah.canela@gmail.com 06 62 24
          56 15 anne.burrus@edu.escp.eu
        </p>
      </div>
      <div className={classes.formContainer}>
        <Card>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="title">Name</label>
              <input type="text" required id="title" ref={nameInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Email</label>
              <input type="url" required id="email" ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="company">Company</label>
              <input type="text" required id="company" ref={companyInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="description">
                Leave a message if you would like!
              </label>
              <textarea
                id="description"
                required
                rows="5"
                ref={descriptionInputRef}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button onClick={submitHandler}>Submit</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default NewMeetupForm;
