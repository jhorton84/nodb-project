



const express = require('express');
const bodyParser = require('body-parser');
const hubbleController = require('./hubbleController');
const app = express();

app.use(bodyParser.json());
// const data = "If you can read this I'm still working"

// app.get('/data', (req, res) => {
//     res.status(200).send(data);
// })

app.get('/photos', hubbleController.getPhotos);
app.post('/favorites', hubbleController.createPhoto);
app.delete('/favorites/:id', hubbleController.deletePhoto);
app.get('/favorites', hubbleController.getFavorites);
// app.put('/photos', hubbleController.getPhoto);




const PORT = 4000;
app.listen(PORT, () => console.log(`Server has sailed from port ${PORT} ⛵️`));