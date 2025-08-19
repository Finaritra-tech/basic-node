let express = require('express');
let app = express();
require('dotenv').config()

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next(); 
// });

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);


// app.use(mware);
// function mware(req, res, next){
//   console.log(req.method, req.path, req.ip)
//   next();
// }
absolutePath = __dirname + '/views/index.html';


// app.get('/', myRoute);
// function myRoute (req, res) {
//     // res.send('Hello Express');
//     res.sendFile(absolutePath);
// }

// app.use("/public", express.static(__dirname + "/public"));

// const MESSAGE_STYLE = process.env.MESSAGE_STYLE;

// app.get('/json', (req, res) => {
//   let response = { message: "Hello json" };
  
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     response.message = response.message.toUpperCase();
//   }
  
//   res.json(response);
// });






























 module.exports = app;
