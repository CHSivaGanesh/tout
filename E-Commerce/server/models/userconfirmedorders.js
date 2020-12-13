


const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const ConfirmedOrdersSchema = new Schema({

    fullname: String,
    email: String,
    address : String,
    city : String ,
    State: String , 
    zipcode: String , 
   totalprice : String,
   Orders : []
})

  module.exports = mongoose.model('confirmed',ConfirmedOrdersSchema,'userconfirmedorders')

