const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connection = require('./db.js')
const path = require('path')

//to connect to db

//connection();

//creating the express app

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`app is listening at ${PORT}`);

})