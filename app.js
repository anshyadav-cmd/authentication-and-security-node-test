require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
    email : String,
    password: String
})

// encryption 
const secret = process.env.SECRET;

userSchema.plugin(encrypt, {secret: secret, encryptedFields: ['password']});

const User = mongoose.model("User", userSchema);

app.get("/", function(req, res) {
    res.render("home");
})
app.get("/login", function(req, res) {
    res.render("login");
})

app.post("/login", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username}, function(err, foundUser){
        if(!err){
            if(foundUser){
                if(foundUser.password === password){
                    res.render("secrets");
                }else {
                    console.log("Invalid password");
                }
            }else {
                console.log("user doesn't exists");
            }
        }else {
            console.log(err);
        }
    })
})

app.get("/register", function(req, res) {
    res.render("register");
})

app.post("/register", function(req, res) {
    const user = new User({
        email: req.body.username,
        password: req.body.password
    });
    user.save(function(err) {
        if(!err){
            res.render("secrets");
        }else {
            console.log(err);
        }
    });
});

app.get("/logout", function(req, res) {
    res.redirect("/");
})


app.listen(3000, function() {
    console.log("server started on port 3000");
})
