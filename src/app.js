const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path =require ('path');
const hbs=require('hbs');
const mongo = require("./db/conn");
const Register = require("./models/reg");



const connectRe = async () => {
    await mongo().then((mongo) => {
      try {
        console.log("connect to mongodb!!!");
      } catch (err) {
        console.log("no connected");
      } 
    });
  };

// public static path
const static_path =(path.join(__dirname,"../public"));
const template_path =(path.join(__dirname,"../templates/views"));
const partials_path=(path.join(__dirname ,"../templates/partials"))

app.set(`view engine`,'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path)


// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectRe();

app.use(express.static(static_path));




app.get("/", (req, res) => {
    // res.send("Welcome to Website Home")
    res.render('index')
})

app.get("/about", (req, res) => {
    // res.send("Welcome to Website About")
    res.render('about')
})

app.get("/weather", (req, res) => {
    res.render("weather")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})
app.post("/", (req, res) => {
    try {
      var registerpassword = new Register({
        fullname: req.body.fullname,
        number: req.body.number,
        email: req.body.email,
        extra: req.body.extra,
      });
      registerpassword.save((err, data) => {
        if (err) {
          console.error(err);
        } else {
  
  
          res.status(201).render("about");
  
          app.get("*", (req, res) => {
            res.render("error");
          });
        }
      });
    } catch (error) {
      res.render("error");
    }
  });

app.get("*", (req, res) => {
    res.render("404error",{
        errorMsg:'Error!! 404 Page Not Found'
    })
})



app.listen(port, () => {
    console.log(`Listning at ${port}`)
})