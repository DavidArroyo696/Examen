const express = require('express');
const initDB = require('./config/db');
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()

const port = 3001

const userRouters = require('./app/routes/user')
const itemsRouters = require('./app/routes/items')
const uploadRouters = require('./app/routes/upload')
    //const { connect } = require('./app/routes/user');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(uploadRouters)
app.use(userRouters)
app.use(itemsRouters)


app.listen(port, () => {
    console.log('La aplicación esta en Linea');
})

initDB();