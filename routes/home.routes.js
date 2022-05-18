const app =require("express").Router()

app.get('/home', (req, res) => {
    console.log(req.session.myID)
    res.render("home.ejs")
});

module.exports=app