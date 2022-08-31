const { default: mongoose } = require("mongoose");


//schema
const sleepinfoSchema = new mongoose.Schema({
    myid: Number,
    nickname: String,
    sleepResult: String,
    sleepissueTime: String,
    sleepTimebed: String,
    morningTimegetup: String,
    hourSleepNight: String
})

var Sleep = mongoose.model('Sleep', sleepinfoSchema);

module.exports = (app) => {
    app.post('/name', (req, res) => {
        var newUser
    })
    app.post('/sleepResult', (req, res) => {

    })
    app.post('/sleepissueTime', (req, res) => {

    })
    app.post('/sleepTimebed', (req,res) => {

    })
    app.post('/morningTimegetup', (req, res) => {

    })
    app.post('/hourSleepNight', (req, res) => {
    })

}