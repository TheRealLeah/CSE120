import fb from "../fb";

export var homedata: [string, string][] = [];

// export default class HomeData {

//     async loadData(){
//         var db = fb.firestore().collection('events');
//         await db.get().then(querySnapshot => {
//         console.log("Event Size:", querySnapshot.size);

//         querySnapshot.forEach(documentSnapshot => {
//         //console.log("Event ID:",documentSnapshot.id, documentSnapshot.data());
//             data = documentSnapshot.data();

//             console.log("Event Name:", data['name']);
//             console.log("Event Desc:", data['desc']);
//             console.log("Got Data:");
//             })
//         })
//         //name = data['name'];
//         // console.log("After Load:", name);
//     }
//     getData(){
//         //console.log("Before Load:");
//         this.loadData();
//         return data;
//     }

//   }

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
      homedata.push([data["name"], data["desc"]]);

      //console.log("Event Name:", data['name']);
      //console.log("Event Desc:", data['desc']);
      //console.log("Got Data:");
    });
  });
  //name = data['name'];
  // console.log("After Load:", name);
}
