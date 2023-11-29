import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import Feature from 'ol/Feature.js';
import { Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

const firstPOI = new Feature({
    geometry: new Point(fromLonLat([-99.32770157555619, 38.87965489908172]))
});

const secondPOI = new Feature({
    geometry: new Point(fromLonLat([-94.60182061170312, 39.101927475378396]))
});

const thirdPOI = new Feature({
    geometry: new Point(fromLonLat([-90.19917552665406, 38.62652310190238]))
});

const fourthPOI = new Feature({
    geometry: new Point(fromLonLat([-94.60182061170312, 39.101927475378396]))
});

const vectorSource = new VectorSource({
    features: [firstPOI, secondPOI, thirdPOI, fourthPOI],
});


const vectorLayer = new VectorLayer({
    source: vectorSource,
});

const view = new View({
    center: [-10565627, 4714377],
    zoom: 6,
    extent: [-13051129, 3256350, -8054498, 6191704]
})

const map = new Map({
    view: view,
    layers: [
        new TileLayer({
            source: new OSM(),
        }),
        vectorLayer
    ],
    target: 'map',
});

// TODO : Kirb switcher event handler

const blackGifUrl = 'data/black_star.gif';
const blackGif = gifler(blackGifUrl);
blackGif.frames(
    document.createElement('canvas'),
    (ctx, frame) => {
        if (!firstPOI.getStyle()) {
            firstPOI.setStyle(
                new Style({
                    image: new Icon({
                        img: ctx.canvas,
                        imgSize: [frame.width, frame.height]
                    }),
                })
            );
        }
        ctx.drawImage(frame.buffer, frame.x, frame.y);
        map.render();
    },
    true
);

const whiteGifUrl = 'data/white_star.gif';
const whiteGif = gifler(whiteGifUrl);
whiteGif.frames(
    document.createElement('canvas'),
    (ctx, frame) => {
        if (!secondPOI.getStyle()) {
            secondPOI.setStyle(
                new Style({
                    image: new Icon({
                        img: ctx.canvas,
                        imgSize: [frame.width, frame.height]
                    }),
                })
            );
        }
        ctx.drawImage(frame.buffer, frame.x, frame.y);
        map.render();
    },
    true
);

const yellowGifUrl = 'data/yellow_star.gif';
const yellowGif = gifler(yellowGifUrl);
yellowGif.frames(
    document.createElement('canvas'),
    (ctx, frame) => {
        if (!thirdPOI.getStyle()) {
            thirdPOI.setStyle(
                new Style({
                    image: new Icon({
                        img: ctx.canvas,
                        imgSize: [frame.width, frame.height]
                    }),
                })
            );
        }
        ctx.drawImage(frame.buffer, frame.x, frame.y);
        map.render();
    },
    true
);

const redGifUrl = 'data/red_star.gif';
const redGif = gifler(redGifUrl);
redGif.frames(
    document.createElement('canvas'),
    (ctx, frame) => {
        if (!fourthPOI.getStyle()) {
            fourthPOI.setStyle(
                new Style({
                    image: new Icon({
                        img: ctx.canvas,
                        imgSize: [frame.width, frame.height]
                    }),
                })
            );
        }
        ctx.drawImage(frame.buffer, frame.x, frame.y);
        map.render();
    },
    true
);

////////////////////////////////////////////////////////////////////////////
/// Event listeners to hide modal during map movement.
////////////////////////////////////////////////////////////////////////////

map.on("singleclick", () => {
    // document.getElementById("modal-container").style.visibility = 'hidden';
    if (document.getElementById("modal-container").classList.contains('visible')) {
        document.getElementById("modal-container").classList.remove('visible');
        document.getElementById("modal-container").classList.add('hidden');
    }
});

map.on("dblclick", () => {
    // document.getElementById("modal-container").style.visibility = 'hidden';
    if (document.getElementById("modal-container").classList.contains('visible')) {
        document.getElementById("modal-container").classList.remove('visible');
        document.getElementById("modal-container").classList.add('hidden');
    }
});

map.on("pointerdrag", () => {
    // document.getElementById("modal-container").style.visibility = 'hidden';
    if (document.getElementById("modal-container").classList.contains('visible')) {
        document.getElementById("modal-container").classList.remove('visible');
        document.getElementById("modal-container").classList.add('hidden');
    }
});


////////////////////////////////////////////////////////////////////////////
/// Click event listeners for titles / modal content control.
////////////////////////////////////////////////////////////////////////////

window.addEventListener("DOMContentLoaded", () => {
    // Hides modal on every page refresh.
    // document.getElementById("modal-container").style.visibility = 'hidden';
    if (document.getElementById("modal-container").classList.contains('visible')) {
        document.getElementById("modal-container").classList.remove('visible');
        document.getElementById("modal-container").classList.add('hidden');
    }

    document.getElementById("control1").addEventListener(
        'click',
        () => {
            const destination = firstPOI.getGeometry().getCoordinates();
            const offsetDest = [destination[0] + 3000, destination[1]];
            view.animate({
                center: offsetDest,
                duration: 1500,
                zoom: 14,

            })
            setDescriptionModal("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        },
        false
    );

    document.getElementById("control2").addEventListener(
        'click',
        () => {
            // Change to new poi
            const destination = secondPOI.getGeometry().getCoordinates();
            const offsetDest = [destination[0] + 8000, destination[1]];
            view.animate({
                center: offsetDest,
                duration: 1500,
                zoom: 12,

            })
            setDescriptionModal("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        },
        false
    );

    document.getElementById("control3").addEventListener(
        'click',
        () => {
            const destination = thirdPOI.getGeometry().getCoordinates();
            const offsetDest = [destination[0] + 6000, destination[1]];
            view.animate({
                center: offsetDest,
                duration: 1500,
                zoom: 12,

            })
            setDescriptionModal("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        },
        false
    );

    document.getElementById("control4").addEventListener(
        'click',
        () => {
            // Change to new poi
            const destination = fourthPOI.getGeometry().getCoordinates();
            const offsetDest = [destination[0] + 10000, destination[1]];
            view.animate({
                center: offsetDest,
                duration: 1500,
                zoom: 12,

            })
            setDescriptionModal("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        },
        false
    );
});

// Handles modal visibility and fade in/out for smooth text transition.
function setDescriptionModal(modalText) {
    if (document.getElementById("modal-container").classList.contains('hidden')) {
        document.getElementById("modal-content").innerHTML = modalText;
        document.getElementById("modal-container").classList.remove('hidden');
        document.getElementById("modal-container").classList.add('visible');
    } else {
        document.getElementById("modal-container").classList.remove('visible');
        document.getElementById("modal-container").classList.add('hidden');
        setTimeout(() => {
            document.getElementById("modal-content").innerHTML = modalText;
            document.getElementById("modal-container").classList.remove('hidden');
            document.getElementById("modal-container").classList.add('visible');
        }, 750);
    }
};