const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const Laptop_bagsSchema = new Schema({
  
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

module.exports = mongoose.model('laptop_bags',Laptop_bagsSchema,'Laptop_bags')