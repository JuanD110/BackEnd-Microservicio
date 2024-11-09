const express = require ('express')
const { getConnection} = require ('./database/db-mongo-connection') 
const cors = require('cors');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Implementamos cors
app.use(cors());

getConnection();

// Parseo JSON
app.use(express.json());

app.use('/proyecto', require('./routers/proyecto'));


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})