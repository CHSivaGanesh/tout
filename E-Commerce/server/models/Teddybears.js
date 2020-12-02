const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const TeddybearsSchema = new Schema({
    name  :String,
    sold_by : String,
    size    :String,
    price    : Number,
        weight   : Number ,
    material    : String ,
    height    : String,
    width  : Number,
    depth    : Number,
    img:String,
})

module.exports = mongoose.model('Teddybears',TeddybearsSchema,'Teddybears')