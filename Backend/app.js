const express = require("express");

const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
// db connection
mongoose.connect("mongodb+srv://tiya:post24@cluster0.qh8z9se.mongodb.net/exittest",{
   useNewUrlParser:true,
  useUnifiedTopology:true
});
const FormData =require('./form');
const form = require("./form");
const app = new express();
app.use(bodyparser.json());

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'tmsictak22@gmail.com',
      pass: 'otmqtugvitsptyaj'
    }
  });

app.post('/signin',(req,res)=>{
    console.log("email:",req.body.email)  
    var value = Math.floor(Math.random() * 2000);
    var newid = "OTP" + value.toString();
    console.log("newId",newid);
   
    var form ={
        email:req.body.email
    }
   
    var form = new FormData(form);
    form.save().then(function (form) {
        var mailOptions = {
          from: 'tmsictak22@gmail.com',
           to: trainers.email,
          subject: 'Form is submitted',
         
          html:`<p>'Thank you for taking the time to submit the form
        OTP:${form.newid}</p>
          <br>
          From Tiya`
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
               res.send(trainers);
             })
   
             res.send()
      });
    


app.listen(3000);
console.log("port 3000");