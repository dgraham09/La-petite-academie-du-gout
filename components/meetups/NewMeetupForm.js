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
  );
}

export default NewMeetupForm;
