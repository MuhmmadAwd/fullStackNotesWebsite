const app =require("express").Router()
const model = require("../model/users.model")
const bcrypt = require('bcrypt');

app.get('/', (req, res) => {
    res.render("signup.ejs")
});

app.post('/handleSignUp', async (req, res) => {
    const{fname,lname,email,password}=req.body
    let data = await model.findOne({email})
    if(data){
        console.log("this email is exist before")
    }
    else{

        bcrypt.hash(password, 7, async function(err, hash) {

            await model.insertMany({
                fname,lname,email,password:hash
            })
        });

        res.redirect("/signin")

    }
    res.redirect("/")


});

module.exports=app