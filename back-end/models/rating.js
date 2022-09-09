const { Number } = require("core-js")
const { String } = require("core-js")
const mongoose = require("mongoose")
const {Schema} = mongoose

let RatingSchema = new Schema({
    idDrink: {
        type: Number
    },
    rate: {
        type: Number
    },
    // User: {
    //     first_name: {
    //         type: String
    //     },
    //     last_name: {
    //         type: String
    //     },
    //     email: {
    //         type: String
    //     },    
    // },
}, {
    collection: "rating"
}, {
    versionKey: "_somethingElse"
})

module.exports = mongoose.model("rating", RatingSchema)