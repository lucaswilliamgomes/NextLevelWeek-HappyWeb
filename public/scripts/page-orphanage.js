const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoolControl: false
}
// create map
var map = L.map('mapid', options).setView([-27.2185383, -49.6518011], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([-27.2185383, -49.6518011], {icon}).addTo(map)


/* image gallery */

function selectImage (event) {
    const button = event.currentTarget

    

    // Remover as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(element => {
        element.classList.remove("active")
    });
    

    // Selecionar a imagem clicada

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    // Atualizar o container da imagem

    imageContainer.src = image.src

    // adicionar a classe active na imagem clicada

    button.classList.add("active");
}