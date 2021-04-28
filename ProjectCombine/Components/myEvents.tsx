import fb from "../fb";

export var eventdata: [string][] = [];

export default async function LoadEventData() {
  var data;

  var db = fb.firestore().collection("users");
  await db.doc(fb.auth().currentUser.uid)
    .get()
    .then((doc) => {
      var temp = doc.data();
      data = temp["myEvents"];
    });
    for(var i = 0; i < data.length; i++){
        eventdata.push(data[i]);
        //console.log("test:", data[i]);
    }

}
