const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const MobilesSchema = new Schema({
    title : String,
    color :String,
    made_in:String,
    type:String,
Battery:String,
ram:String,
rom:String,
price:String,
display:String,
Camera:String,

})

module.exports = mongoose.model('mobiles',MobilesSchema,'Mobiles')