
// create map
var map = L.map('mapid').setView([-27.2185383, -49.6518011], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create popup overlay

const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('lar das meninas <a href="/orphanage" class="choose-orphanage" > <img src="/images/arrow-white.svg" /> </a>')

L.marker([-27.2185383, -49.6518011], {icon}).addTo(map)
    .bindPopup(popup);