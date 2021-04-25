import firebase from "firebase";

export var eventList = [];

export function addEvent(event, addComplete) {
  firebase
    .firestore()
    .collection("events")
    .add({
      name: event.name,
      desc: event.desc,
      location: event.location,
      time: event.time,
      contactinfo: event.contactinfo,
    })
    .then((snapshot) => snapshot.get())
    .then((eventData) => addComplete(eventData.data()))
    .catch((error) => console.log(error));
}

export async function myEventList(eventsRetrieved) {
  var snapshot = await firebase.firestore().collection("events").get();

  snapshot.forEach((doc) => {
    const eventItem = doc.data();
    eventItem.id = doc.id;
    eventList.push(eventItem);
  });

  eventsRetrieved(eventList);
}
