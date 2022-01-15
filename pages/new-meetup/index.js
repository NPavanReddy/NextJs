// ex : our-domine/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewmMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewmMeetupPage;
