const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const product = require('../models/product')
const mobiles = require('../models/Mobiles')
const laptop = require('../models/laptop')
const Order1 = require('../models/order')
const Headphones = require('../models/Headphones')
const Laptop_bags = require('../models/Laptop_bags')
const Teddybears = require('../models/Teddybears')
const Mobile_accesories = require('../models/Mobile_accesories')
const mouses = require('../models/mouses')
const Telivisions = require('../models/Telivisions')
const Sportsitems = require('../models/sportsitems')



const db = "mongodb+srv://SivaGanesh:sivaganesh@cluster0.ljew3.mongodb.net/Ecommerce?retryWrites=true&w=majority"

router.get('/', (req,res) => {
    res.send('From API route')
})

// router.post('/order', (req , res)=>{
//   let orderdata = req.body;
//   let order = new Order1(orderdata)
//   order.save((error,orders) =>{
//     if(err){
//     console.log("error")
//     }
//     else{
//     res.status(200).send(orders);
//     }
//   })
  
// })

router.get('/order' , (req,res)=>{
  res.send("From order get")
})


router.post('/register' , (req , res)=>{
    let userData = req.body
   let user = new User(userData)
   user.save((error , registeredUser) =>{
       if(error)
           console.log("error")
       else{
           res.status(200).send(registeredUser)
       }
   });

});

mongoose.connect(db,  { useNewUrlParser: true } , function(err){
    if(err){
        console.error('Error! ')
    } else {
      console.log('Connected to mongodb')      
    }
});


router.get('/register', (req,res) => {
    res.send('registered')
})



router.post('/login' , (req,res) => {
    let userData = req.body;

    User.findOne({email : userData.email} , (error, user) =>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else
             if( user.password!= userData.password){
                 res.status(401).send('Invalid Password')
                 }
                 else{
                     res.status(200).send(userData)
                 }
        }
    })
})


router.get('/mobiles', (req,res)=> {
 let mobiledata = req.body;
  //  mobilesdata =[];
 mobiles.find({}, function(err,mobiles)
 {
   if(err)
   {
     console.log(err)
   }
   else{
     res.send(mobiles);
    }
 })
})

router.get('/laptops', (req,res)=> {
  let laptopdata = req.body;
    // laptopdata =[];
  laptop.find({}, function(err,laptops)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(laptops);
     }
  })
 
 
 })


 router.get('/headphones', (req,res)=> {
  let headphonesdata = req.body;
  Headphones.find({}, function(err,Headphones)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(Headphones);
     }
  })
 
 
 })

 router.get('/Laptopbags', (req,res)=> {
  
  let Laptop_bagsdata = req.body;

  Laptop_bags.find({}, function(err,laptop_bags)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(laptop_bags);
     }
  })
 
 
 })

 router.get('/Teddybears', (req,res)=> {
  
  let Teddybearsdata = req.body;

  Teddybears.find({}, function(err,teddybears)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(teddybears);
     }
  }) 
 })

 router.get('/sportsitems', (req,res)=> {
  
  let  sportsitemsdata = req.body;

  Sportsitems.find({}, function(err,sportsitems)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(sportsitems);
      console.log(sportsitems)
     }
  }) 
 })



 router.get('/Mobile_accesories', (req,res)=> {
  
  let Mobile_accesoriesdata = req.body;

  Mobile_accesories.find({}, function(err,mobile_accesories)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(mobile_accesories);
     }
  }) 
 })

 router.get('/Televisions', (req,res)=> {
  
  let Telivisionsdata = req.body;

  Telivisions.find({}, function(err,televisions)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(televisions);
     }
  }) 
 })

 router.get('/mouses', (req,res)=> {
  
  let mousesdata = req.body;

  mouses.find({}, function(err,mouses)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(mouses);
     }
  }) 
 })


 module.exports =router 
