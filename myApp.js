let express = require('express');
let app = express();
require('dotenv').config()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

// app.route('/name')
// .get((req, res) => {
//   const first = req.query.first
//   const last = req.query.last

// res.json({name :`${first} ${last}`})
// })
// .post((req, res) => {
//  const first = req.query.first
//   const last = req.query.last

// res.json({name :`${first} ${last}`})
// })
app.post('/name',(req, res) => {
  // var {first : firstname, last:lastname} = req.body
var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
})
// app.get('/:word/echo', (req, res) =>{
//   const {word} = req.params;
//   res.json({echo: word});
// })

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next(); 
// });

// app.get(
//   "/now",
//   (req, res, next) => {
//     req.time = new Date().toString();
//     next();
//   },
//   (req, res) => {
//     res.send({
//       time: req.time
//     });
//   }
// );


// app.use(mware);
// function mware(req, res, next){
//   console.log(req.method, req.path, req.ip)
//   next();
// }
absolutePath = __dirname + '/views/index.html';


app.get('/', myRoute);
function myRoute (req, res) {
    // res.send('Hello Express');
    res.sendFile(absolutePath);
}

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
