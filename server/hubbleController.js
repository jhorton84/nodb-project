const photos =  [
    {
        name: "Eagle Nebula",
        image: 'eagleNebula.jpg',
        id: 1
    },
    {
        name: "Eagle Nebula Fog",
        image: 'eagleNebulaFog.jpg',
        id: 2
    },
    {
        name: "Lagoon nebula",
        image: 'lagoonNebula.jpg',
        id: 3
    },
    {
        name: "Mikly Way",
        image: 'milkyWay.jpg',
        id: 4
    },
    {
        name: "Omega Nebula",
        image: 'omegaNebula.jpg',
        id: 5
    },
    {
        name: "Orion Nebula",
        image: 'orionNebula.jpg',
        id: 6
    },
    {
        name: "Solar Eclipse",
        image: 'solarEclipse.jpg',
        id: 7
    },
    {
        name: "Sombrero Fog Spiral",
        image: 'sombreroFogSpiral.jpg',
        id: 8
    },
    {
        name: "Sun",
        image: 'sun.jpg',
        id: 9
    }
];

const favorites = [];


module.exports = {
    getPhotos: (req, res) => {
        res.status(200).send(photos);
    },
    getFavorites: (req, res) => {
        res.status(200).send(favorites);
    },

    createPhoto: (req, res) => {
        const {photo} = req.body;
        favorites.push(photo)
        res.status(200).json(favorites);
    },

    deletePhoto: (req, res) => {
        const {id} = req.params;
        favorites.splice(favorites.findIndex(element => element.id === +id), 1);
        res.status(200).send(favorites);
    },
    // randomId = (photos) => {
    //     let [i] = math.random(photos)
    //     return photos.id
    // }
}

