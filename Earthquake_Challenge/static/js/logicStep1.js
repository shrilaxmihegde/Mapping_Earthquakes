// Add console.log to check to see if our code is working.
console.log("working")
// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([30, 30], 2);

let Streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
  "Streets" : Streets,
  "Satellite Streets" : satelliteStreets
};

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [satelliteStreets]
})
// Then we add our 'graymap' tile layer to the map.
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

// Accessing the Toronto airline routes GeoJSON URL.
// Accessing the Toronto neighborhoods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/shrilaxmihegde/Mapping_Earthquakes/main/torontoNeighborhoods.json";
// Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
  //console.log(data);
  //Creating GeoJson layer with the retrive the data.
 
//L.geoJSON(data, {
  //color: "#ffffa1",
 // weight: 2,
 // onEachFeature: function(feature,layer) {
  
 // layer.bindPopup("<h3> Neighborhood:"+ feature.properties.AREA_NAME + "</h3> <hr><h3> Destination:" + feature.properties.AREA_S_CD + "</h3>");

 //  }
 //}).addTo(map);
//});
//console.log("step 4 binding popup");




