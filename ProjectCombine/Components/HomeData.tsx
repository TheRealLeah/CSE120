import fb from "../fb";

export var homedata: [string, string, string, string, string, string, string][] = [];

export default async function LoadData() {
  //homedata.push(["name:t","test"]);
  var data;
  //console.log("Before Load:");
  var db = fb.firestore().collection("events");
  await db.get().then((querySnapshot) => {
    // console.log("Event Size:", querySnapshot.size);

    querySnapshot.forEach((documentSnapshot) => {
      //console.log("Event ID:",documentSnapshot.id, documentSnapshot.data());
      data = documentSnapshot.data();
      homedata.push([
        data["name"],
        data["desc"],
        data["contactinfo"],
        data["location"],
        data["time"],
        documentSnapshot.id,
        data["OrgID"],
      ]);

      //console.log("Event Name:", data['name']);
      //console.log("Event Desc:", data['desc']);
      //console.log("Got Data:");
    });
  });
  //name = data['name'];
  // console.log("After Load:", name);
}
