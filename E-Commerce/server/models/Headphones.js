const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const HeadphonesSchema = new Schema({
    name : String,
color : String,
microphone_type : String ,
wireless : String ,
bluetooth_version : Number,
battery_life : Number ,
price : Number,
warranty : String ,
drivers : Number,
water_ressistance : String ,
features : String,
type : String,
img : String,
})

module.exports = mongoose.model('Headphones',HeadphonesSchema,'Headphones')