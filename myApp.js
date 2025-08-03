let express = require('express');
let app = express();
console.log('Hello World');

absolutePath = __dirname + '/views/index.html';


app.get('/', myRoute);
function myRoute (req, res) {
    // res.send('Hello Express');
    res.sendFile(absolutePath);
}

stylePth = __dirname + '/public';
app.use('/public', express.static(stylePth));




































 module.exports = app;
