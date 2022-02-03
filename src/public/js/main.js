const map = L.map('map-template').setView([51.505, -0.09], 1);

const socket = io();

const tileURL= 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'

//const tileURL2='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

const tileURL2='http://b.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'

L.tileLayer(tileURL2).addTo(map);

map.locate({enableHighAccuracy: true});
map.on('locationfound', e => {

    console.log(e);
    const coords = [e.latlng.lat, e.latlng.lng];
    const newMarker = L.marker(coords);
    newMarker.bindPopup('You are Here!');
    map.addLayer(newMarker);
})

const marker = L.marker([51.505, -0.09]);
marker.bindPopup('Hello there!!!');

map.addLayer(marker);