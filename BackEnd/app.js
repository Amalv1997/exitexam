const express = require("express");
const app = express();
const cors = require("cors");
const  nodeMailer = require('nodemailer'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userdata = require("./src/model/usermodel")

const PORT = process.env.PORT || 3000;

app.get("/" , (req,res)=>{
    res.send("server running on port")
})

app.post("/getotp" , (req,res)=>{
    console.log(req.body)

    var genotp= Math.floor(Math.random()*90000) + 10000;

    console.log(genotp)

    data={
        email:req.body.email,
        otp:genotp
    }
    var user = new userdata(data)
    user.save()

    let mailTransporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: '619amalv@gmail.com',
            pass: 'yourpassword'
        }
    });
      

    let mailDetails = {
        from: '619amalv@gmail.com',
        to: user.email,
        subject: 'OTP Generated Successfully',
        text: genotp + `is your OTP. Do Not Disclose it to Anyone`
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
            res.send("Error")

        } else {
            console.log(mailDetails);
            console.log('Email sent successfully');
            res.send("success")
        }
    });
    })

    app.post("/verifydata" , (req,res)=>{
        console.log(req.body)

        email=req.body.email;
        otp=req.body.otp;

        userdata.find({otp:otp1})
    .then((data)=>{
        console.log(data)
        if(data===null){
            res.send({ status: false, data: 'Invalid OTP' })
        }else{
            res.send({ status: true, data: 'Sucess' })

        }
        
    })
})



app.listen( PORT , (req,res)=>{
    console.log(`Server Running on PORT ${PORT}`)
})


