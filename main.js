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

////////////////////////////////////////////////////////////////////////////
/// Points of Interest to be displayed on the map.
////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////
/// OpenLayer components for rendering
////////////////////////////////////////////////////////////////////////////

const vectorSource = new VectorSource({
    features: [firstPOI, secondPOI, thirdPOI, fourthPOI],
});


const vectorLayer = new VectorLayer({
    source: vectorSource,
});

//Sets default screen for user to begin navigation
const view = new View({
    center: [-10565627, 4714377],
    zoom: 6,
    extent: [-13051129, 3256350, -8054498, 6191704]
})

// ol Map that targets the 'map' div from index
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

////////////////////////////////////////////////////////////////////////////
/// POI Icon Styling Gifs
////////////////////////////////////////////////////////////////////////////

// Using public gifler api to handle frames and canvas interplay with ol
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
/// Event listeners to hide modal during map interactions.
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
    // Hides story modal on every page refresh.
    // document.getElementById("modal-container").style.visibility = 'hidden';
    if (document.getElementById("modal-container").classList.contains('visible')) {
        document.getElementById("modal-container").classList.remove('visible');
        document.getElementById("modal-container").classList.add('hidden');
    }

    if (document.getElementById("footer").classList.contains('footer-visible')) {
        document.getElementById("footer").classList.remove('footer-visible');
        document.getElementById("footer").classList.add('footer-hidden');
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
            setDescriptionModal("My journey begins in Western Kansas, a flat empty plain akin to an empty canvas. The first crude lines of which I would scratch on at university. By studying a wide berth of STEM topics and cultural niches, I would gain a broader understanding of the world’s logic and my place in it.");

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
            setDescriptionModal("I moved on to accomplish bigger dreams, necessitating a move to bigger places. Here I would clean up my lines by immersing myself in every industry at my fingertips. Through trial and error I came upon a deeper grasp of people and their motives and emotions. I had developed a respect for the smallness of big places.");

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
            setDescriptionModal("After hitting a wall, my goals would bring me to embrace a more disciplined lifestyle. My career and skills flourished while my canvas was neglected. I wisened through the pains of bureaucracy and sought a new place in my industry. My small chunk of world became bigger and even still was smaller.");

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
            setDescriptionModal("My next stage encompasses the fruition of life goals. Solidifying a home both in work and life, the final expressions to be placed on my not-forgotten work of art. A return to self-interests and family; a rediscovery of self-devotions and mind. My world would come like circles, biggest of all but smaller than ever.");

        },
        false
    );

    document.getElementById("footer-button").addEventListener(
        'click',
        () => {
            if (document.getElementById("footer").classList.contains('footer-visible')) {
                document.getElementById("footer").classList.remove('footer-visible');
                document.getElementById("footer").classList.add('footer-hidden');
            } else {
                document.getElementById("footer").classList.remove('footer-hidden');
                document.getElementById("footer").classList.add('footer-visible');
            }
        }
    )
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