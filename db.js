const mongoose = require('mongoose')

module.exports = () => {
    const connParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.DB, connParams);
        console.log("connected")
    } catch (err) {
        console.log(err);
    }
}
