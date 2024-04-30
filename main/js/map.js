
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

console.log("hello");

let map;
let service;
let infowindow;

function initMap(){
  const sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"),{
    // center: sydney,
    zoom: 15,
  });

  const request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(
    request,
    (
      results,
      status
    ) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
       console.log(results);

        // map.setCenter(results[0].geometry!.location!);
      }
    }
  );
}



window.initMap = initMap;

