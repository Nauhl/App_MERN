// Import libraries
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// use methods libraries 
const app = express();
require('dotenv').config();

// Middlewares  
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Database setup   la conexion se hace con el archivo env
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {console.log("Connection to database successful!")})

// Routes setup     enviaremos un mensaje especificando ruta local

app.use('/api/category', require('./routes/category'));

/*app.get('/', (req, res) => {
    res.send("Hello there from MERN proyect server");         *********  Solo para verificar no haya error  ***********
});*/


// Listen to port   oir nuestro servidor en el puerto declarado
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor esta corriendo en el puerto ${port}`);
})