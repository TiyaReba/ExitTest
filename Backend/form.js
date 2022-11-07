const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Form = new Schema({
    email:String
})

module.exports = mongoose.model("forms",Form);