const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');
require("dotenv").config();
const authRoute = require('./v1/routes/authRoute')
const operadorsRoutes = require('./v1/routes/operadorsRoute')
const cajonsRoutes = require('./v1/routes/cajonsRoute')
const intercambiosRoutes = require('./v1/routes/intercambiosRoute')

const app = express();

const PORT = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));

app.use(express.static('uploads')); 
app.use('/imagenes_operadores', express.static('imagenes_operadores'));


app.use('/api/v1/login', authRoute)
app.use('/api/v1', operadorsRoutes)
app.use('/api/v1', cajonsRoutes)
app.use('/api/v1', intercambiosRoutes)

app.get('/', (req, res) => {
    res.send(`<h1> Welcome </h1>`)
})

mongoose.connect(process.env.MONGODB_URI, {
    autoIndex: true,

})
    .then(() => console.log('Connectado a MONGODB'))
    .catch((error) => console.log(error));

app.listen(PORT, () => console.log('Server Listening on Port:', PORT));