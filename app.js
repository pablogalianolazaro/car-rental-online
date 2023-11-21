const express = require('express');
const app = express();
const path = require('path');

app.get('/car-rental-online/api/*', (req, res) => {
    res.status(501).send('Not implemented, yet!');
});
app.use('/car-rental-online/components',
    express.static(path.join(__dirname, 'public/components')));
app.use('/car-rental-online/model',
    express.static(path.join(__dirname, 'public/model')));
app.use('/car-rental-online/test',
    express.static(path.join(__dirname, 'public/test')));
app.use('/car-rental-online/css',
    express.static(path.join(__dirname, 'public/css')));
app.use(/^\/car-rental-online/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Ejecutando Servidor en el puerto ' + PORT);
})