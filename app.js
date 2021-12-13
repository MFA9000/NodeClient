const express = require('express');
const ejs = require('ejs');


const PORT = 5000;

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/login_callback", (req, res) => {
  res.render("otp");
});


app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`);
})
