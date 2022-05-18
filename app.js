const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const model =require("./model/users.model")
const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}))

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.use(require("./routes/home.routes"))
app.use(require("./routes/signin.routes"))
app.use(require("./routes/signup.routes"))

mongoose.connect("mongodb://localhost:27017/rev11",
{ useNewUrlParser: true, useUnifiedTopology: true })


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});