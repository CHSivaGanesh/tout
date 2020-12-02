const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const Mobile_accesoriesSchema = new Schema({
  
    name:String,
material:String,
color:String,
height:String,
compartments:Number,
pockets:Number,
type:String,
price:Number,
img:String,
})

module.exports = mongoose.model('Mobile_accesories',Mobile_accesoriesSchema,'Mobile_accesories')