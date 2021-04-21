//Store all firebase related code.

import firebase from "/Users/JoshGialis/Desktop/CSE LOCAL 120/CSE120/ProjectCombine/fb.js";

export function addNotification() {}

export async function getNotification(notificationsRetrieved) {
  var notificationList = [];
  var snapshot = await firebase
    .firestore()
    .collection("notifications")
    .where(
      "id",
      "==",
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid).id
    )
    .get();

  snapshot.forEach((doc) => {
    const notification = doc.data();
    notificationList.push(notification);
  });

  notificationsRetrieved(notificationList);
}
