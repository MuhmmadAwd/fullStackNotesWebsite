const app =require("express").Router()
const model = require("../model/users.model")
const bcrypt = require('bcrypt');

app.get('/signin', (req, res) => {
    res.render("signin.ejs")
});

app.post('/handleSignin',  (req, res) => {
    const{email,password}=req.body
    let data =  model.findOne({email})
    if(data!=null){

        const match =  bcrypt.compare(password, data.password);

        if(match){
            req.session.myName=data.fname
            res.redirect("/home")
        } else{
            console.log("password not true")
        }
        
        } else{
            console.log("email not exist")
        }
    res.redirect("/signin")
});

module.exports=app