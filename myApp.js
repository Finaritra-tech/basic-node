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
app.use(express.static(stylePth));

app.get('/json',myJson );
function myJson(req, res){
    res.json({ message: "Hello json" });
}



































 module.exports = app;
