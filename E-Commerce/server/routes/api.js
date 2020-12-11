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
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const { getMaxListeners, findOneAndUpdate } = require('../models/user')

let email = '';

const db = "mongodb+srv://SivaGanesh:Thuglife@5599@cluster0.ljew3.mongodb.net/Ecommerce?retryWrites=true&w=majority"

router.post('/sendmail' , (req,res) =>{
  console.log("request came");
    let mailer = req.body;
    console.log(mailer);
  sendMail(mailer,info =>{
    console.log('The email has been sent succesfully');
    res.send(info);
  })


})



async function sendMail(mailer,callback){
  let transporter = nodemailer.createTransport({
    service: 'gmail',
  host: 'smtp.gmail.com',
    // true for 465, false for other ports
    auth: {
      user: 'sivaganesh1528@gmail.com', // generated ethereal user
      pass: 'Thuglife@5599', // generated ethereal password
    },
  });
  let mailOptions = {
    from : 'Tout Website CEO - Siva Ganesh',
    to : mailer.email,
    subject : "Welcome to our website Tout",
     text : "none",
    html:   "<b>Hii there!! We are so excited to have you on board🥳🥳🥳 I Siva Ganesh The CEO and Founder of Tout Ecommerce website welcomes you wholehartedly🍾🍾🍾🍾🥂 🥂 🥂 </b>",
             
  }

  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

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

router.post('/order',(req,res)=>{
  let OrderData = req.body 
  let order = new Order1(OrderData)

  order.save((error, obj ) => {
    if(error){
      console.log("error")
    }
    else{
      res.status(200).send(order)
    }
  })
  
})




router.post('/register' , (req , res)=>{

    let userData = req.body
    email = userData.email;
   let user = new User(userData)
   user.save((error , registeredUser) =>{
       if(error)
           console.log("error")
       else{
           let payload = {subject : registeredUser._id}
           let token = jwt.sign(payload,'secretkey')
           res.status(200).send({token,user})
       }
   });

});

mongoose.connect(db ,{ useNewUrlParser: true } , function(err){
    if(err){
        console.error('Error! ')
    } else {
      console.log('Connected to mongodb')      
    }
});

// function verifyToken(req,res,next){
//   if(!req.headers.authorization){
//     return res.status(401).send('Unauthorized request')
//   }
//   let token = req.headers.authorization.split(' ')[1]
//   if (token === 'null'){
//     return res.status(401).send('Unauthorized request')
//   }

//   let payload=jwt.verify(token,'secretkey')

//   if(!payload){
//     return res.status(401).send('Unauthorized request')
//   }
//   req.userId = payload.subject
//   next()
// }

router.get('/register', (req,res) => {
    res.send('registered')
})

router.get('/home',  (req,res)=>{
  res.send('Home')
})



// router.put('/orderheadphones/:id',(req,res)=>{​​​​
//   User.findByIdAndUpdate(req.params.id, {​​​​
//     $push: {​​​​ headphones : req.body.headphones}​​​​
//   }​​​​, {​​​​new: true}​​​​)
//   .then((resp) => {​​​​
//     res.send(resp);
//   }​​​​)
//   .catch((err) => res.send(err));
// }​​​​);

// router.put('/ordermobiles/:id',(req,res)=>{​​​​
//   User.findByIdAndUpdate(req.params.id, {​​​​
//     $push: {​​​​ mobiles : req.body.mobiles}​​​​
//   }​​​​, {​​​​new: true}​​​​)
//   .then((resp) => {​​​​
//     res.send(resp);
//   }​​​​)
//   .catch((err) => res.send(err));
// }​​​​);


router.get('/order',(req,res)=>{

 Order1.find({email : email},(error , order)=>{
   if(error){
     console.log("error")
   }
   else{
     res.send(order)
     
   }
 })
   
})
router.post('/login' , (req,res) => {


    let userData = req.body;

    email = userData.email;

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
                   let payload = {subject : user._id}
                   let token = jwt.sign(payload, 'secretkey')
                     res.status(200).send({token,user})
                 }
        }
    })
})

router.delete('/remove/:email/:name',(req,res)=>{
  let removedata=req.body;

  Order1.findOneAndDelete({ email : req.params.email , name : req.params.name},(error,item)=>{
  if(error){
    console.log("error")
  }
  else{
    console.log("Removed")
    res.send("hello")
  } 
});
})

router.get('/mobiles',(req,res)=>{

mobiles.find({} , function(err,mobiles) {
  
  if(err)
  {
    res.send("Error")
  }
  else{
    res.send(mobiles)
    
  }
})
})

router.get('/laptops',  (req,res)=> {
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

 router.get('/Televisions',(req,res)=> {
  
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

 router.put('/quantityset',(req,res) =>{
   let quantitysetdata = req.body ; 
   Order1.findOneAndUpdate({email : email , name : quantitysetdata.name}, {
     $set : {quantity : quantitysetdata.quantity}
   }, {new : true})
   .then((resp) => {
     res.send(resp);
   })

   .catch((err) =>  res.send(err));

 });

//  router.put('/quantityset', (req,res) => {​​
//   let quantitysetdata = req.body;

//   Order1.findOneAndUpdate({​​email: email , name: quantitysetdata.name}​​,{​​

//     $set: {​​quantity : quantitysetdata.quantity}​​

//   }​​, {​​new: true}​​)

//   .then((resp) => {​​

//     res.send(resp);

//   }​​)

//   .catch((err) => res.send(err));

// }​​);
  
 

 module.exports =router 
 