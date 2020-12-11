const mongoose =  require('mongoose')

const Schema = mongoose.Schema
const orderSchema = new Schema({
    email : String,
    name : String,
    price : Number,
    type : String,
    img:String,
    quantity:Number,
})


module.exports = mongoose.model('Order',orderSchema,'Orders')
