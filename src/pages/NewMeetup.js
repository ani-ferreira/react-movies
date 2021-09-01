import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/layouts/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://react-data-7072c-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add new movie</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
