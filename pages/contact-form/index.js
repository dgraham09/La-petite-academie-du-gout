import Contactform from "../../components/company/ContactForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("../api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };
  return <Contactform onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
