let express = require('express');
let app = express();
console.log('Hello World');
app.get('/', myRoute);
function myRoute (req, res) {
    res.send('Hello Express');
}





































 module.exports = app;
