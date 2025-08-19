let express = require('express');
let app = express();
require('dotenv').config()

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next(); 
// });

app.get('/now',
  function(req, res, next) {
    req.time = new Date().toString(); 
    next(); 
  },
  function(req, res) {
    res.json({ time: req.time }); 
  }
);

console.log('hello ffi')
// app.use(mware);
// function mware(req, res, next){
//   console.log(req.method, req.path, req.ip)
//   next();
// }
// absolutePath = __dirname + '/views/index.html';


// app.get('/', myRoute);
// function myRoute (req, res) {
//     // res.send('Hello Express');
//     res.sendFile(absolutePath);
// }

// stylePth = __dirname + '/public';
// app.use(express.static(stylePth));

// const MESSAGE_STYLE = process.env.MESSAGE_STYLE;

// app.get('/json', (req, res) => {
//   let response = { message: "Hello json" };
  
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     response.message = response.message.toUpperCase();
//   }
  
//   res.json(response);
// });






























 module.exports = app;
