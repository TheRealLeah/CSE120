import firebase from "firebase";

export function addEvent(event, addComplete){
    firebase.firestore()
    .collection("events")
    .add({
      name: event.name,
      desc: event.desc,
      location: event.location,
      time: event.time,
      contactinfo: event.contactinfo
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error));
}