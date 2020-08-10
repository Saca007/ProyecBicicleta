var mymap = L.map('mapid').setView([11.0192325,-74.8913982], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FjYTAwNyIsImEiOiJja2RpdHV2ejUwOGdxMnBvNmxrYW4yNXBvIn0.9N_d3hV5AMt9J7d76RclJQ'
}).addTo(mymap);


var marker = L.marker([11.0182637,-74.8565346]).addTo(mymap);//mi casa
var marker = L.marker([11.0223752,-74.8666837]).addTo(mymap);//casa de mama
var marker = L.marker([11.0185819,-74.8669195]).addTo(mymap);//cc le champ
