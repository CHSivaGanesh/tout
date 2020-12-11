const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const MobilesSchema = new Schema({
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

module.exports = mongoose.model('sportsitems',MobilesSchema,'sportsitems')