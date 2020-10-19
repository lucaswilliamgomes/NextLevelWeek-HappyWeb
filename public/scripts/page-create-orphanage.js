
// create map
var map = L.map('mapid').setView([-10.0614319, -50.41139], 5);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

// create and add marker 
let marker

map.on('click', event => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    if (marker) {
        map.removeLayer(marker)
    }

    // add icon layer 
    marker = L.marker ([lat, lng], {icon}).addTo(map)
})


// add photo field
function addPhotoField () {
    
    // find add photo container #images
    const container = document.querySelector('#images') 

    // duplicate container .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // check if the input is empty
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }

    // clear field before add container .new-upload
    input.value = ""

    // add clone container in html
    container.appendChild(newFieldContainer)
}

// delete photo field
function deletePhotoField (event) {

    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        // clear value input 
        span.parentNode.children[0].value = ""
        return
    }

    // delete field
    span.parentNode.remove()




}

// select yes or no
function toggleSelect (event) {
    
    // delete class active in the buttons
    document.querySelectorAll('.button-select button')
    .forEach (button => {
        button.classList.remove('active')
    })

    // put on class active in button clicked
    const clicked = event.currentTarget
    clicked.classList.add('active')

    // update input with the value selected 

    const input = document.querySelector('[name="open_on_weekends"')
    input.value = clicked.dataset.value
}

function validate (event) {
    lat = document.querySelector('[name=lat]').value
    if (lat == ""){
        event.preventDefault()
        alert("Marque a localizção do orfanato no mapa!")
    }
    
}
