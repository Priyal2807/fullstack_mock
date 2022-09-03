const { default: mongoose } = require("mongoose");


//schema
const sleepinfoSchema = new mongoose.Schema({
    myid: Number,
    nickname: String,
    sleepResult: [String],
    sleepissueTime: String,
    sleepTimebed: String,
    morningTimegetup: String,
    hourSleepNight: String
})

var Sleep = mongoose.model('Sleep', sleepinfoSchema);

module.exports = (app) => {
    app.post('/name', (req, res) => {
        Sleep.find({ myid: parseInt(req.body.myid) }, function (err, data){
            if (err) throw err;
            if (!data.length) {
                Sleep({
                    myid: parseInt(req.body.myid),
                    nickname: req.body.data,
                    sleepResult: [],
                    sleepissueTime: "",
                    sleepTimebed: "",
                    morningTimegetup: "",
                    hourSleepNight: ""
                }).save((err, data) => {
                    if (err) throw err;
                    res.status(200).send({ message: "ok" })
                })
            }
            res.status(200).send({ message:"ok" })
     })

})
    app.post('/sleepResult', (req, res) => {
        Sleep.findOne({ myid: parseInt(req.body.myid) }, function (err, data) {
            if (err) throw err;
            data.sleepResult = req.body.val;
            data.save(function (err) {
                if (err) throw err;
            })
            res.status(200).send();
        })
    })
    app.post('/sleepissueTime', (req, res) => {
        Sleep.findOne({ myid: parseInt(req.body.myid) }, (err, data) => {
            if (err) throw err;
            data.sleepissueTime = req.body.val;
            data.save((err) => {
                if (err) throw err;
            })
            res.status(200).send()
        })
    })
    app.post('/sleepTimebed', (req,res) => {
        Sleep.findOne({ myid: parseInt(req.body.myid) }, (err, data) => {
            if (err) throw err;
            data.sleepTimebed = req.body.bedtime;
            data.save((err) => {
                if (err) throw err;
            })
            res.status(200).send()
        })
    })
    app.post('/morningTimegetup', (req, res) => {
        Sleep.findOne({ myid: parseInt(req.body.myid) }, (err, data) => {
            if (err) throw err;
            data.morningTimegetup = req.body.morningtime;
            data.save((err) => {
                if (err) throw err;
            })
            res.status(200).send()
        })
    })
    app.post('/hourSleepNight', (req, res) => {
        Sleep.findOne({ myid: parseInt(req.body.myid) }, (err, data) => {
            if (err) throw err;
            data.hourSleepNight = req.body.hours
            data.save((err) => {
                if(err) throw err
            })
            res.status(200).send()
        })
    })

}