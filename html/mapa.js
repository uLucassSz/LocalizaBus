const locateWrapper = document.querySelector('.locate-wrapper');
const locateMap = document.getElementById('map')

let map = null;
let busMarker = null;
let router = null;

function showMap() {
    locateWrapper.classList.add('active');
    document.body.classList.add('box-active');
    locateMap.style.display = 'block';

    if (map === null) {
        map = L.map('map').setView([-22.413452, -47.561481], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://localizabus.discloud.app/">LocalizaBus</a>, Todos os direitos reservados - 2023'
        }).addTo(map);

        const busIcon = L.divIcon({
            className: 'bus-icon',
            html: '<i class="bx bxs-bus"></i>',
            iconSize: [32, 32]
        });

        map.scrollWheelZoom.disable();
        busMarker = L.marker([-22.413452, -47.561481], { icon: busIcon }).addTo(map);

        router = L.Routing.control({
            waypoints: [
                L.latLng(-22.413452, -47.561481),
                L.latLng(-22.420123, -47.557678),
            ],
            draggableWaypoints: false,
            routeWhileDragging: false,
            addWaypoints: false,
        }).addTo(map);

        router.on('routeselected', function (e) {
            const route = e.route;
            const coordinates = route.coordinates;

            animateBus(coordinates);
        });
    }
}

function closeMap() {
    locateWrapper.classList.remove('active');
    document.body.classList.remove('box-active');
    locateMap.style.display = 'none';

    if (map !== null) {
        map.remove();
        map = null;
        busMarker = null;
        router = null;
    }
}

function animateBus(coordinates) {
    let index = 0;

    function moveBus() {
        if (index < coordinates.length) {
            const coord = coordinates[index];
            busMarker.setLatLng(coord);
            index++;

            setTimeout(moveBus, 1000);
        }
    }

    moveBus();
}