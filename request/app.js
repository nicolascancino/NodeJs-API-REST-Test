const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => res.send('Metodo get'));

app.listen(port, () => console.log('Servidor levantado en el puerto 3000'));
