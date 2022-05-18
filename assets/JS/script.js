var mainModal = document.getElementById("mainModel");
var myInput = document.getElementById("myInput");

// Modal
// $("myModal").click("shown.bs.modal"),function (event) {
//     event.preventDefault
//     myInput.focus();
// }
// myModal.addEventListener("shown.bs.modal", function () {

// });

var userLat;
var userLon;

navigator.geolocation.getCurrentPosition((data) => {
  userLon = data.coords.longitude;
  userLat = data.coords.latitude;
  userLocation(userLat, userLon);
});

function userLocation(lat, lon) {
  $.ajax({
    processData: false,
    url: `https://test1-api.rescuegroups.org/v5/public/animals/search/available/`,
    method: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      "Authorization": "LFSvPQMT",
    },
    data: JSON.stringify({
      filterProcessing: "1 and 2",
      filterRadius: {
        miles: 100,
        lat: lat,
        lon: lon,
      },
    }),
  })

  .then((data) => console.log(data))
  .catch((err) => console.log(err));
}
$("mainModal").click("shown.bs.modal"),function (event) {
    event.preventDefault
    myInput.focus();
} 