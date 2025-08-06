let express = require('express');
let app = express();
console.log('Hello World');
require('dotenv').config()

absolutePath = __dirname + '/views/index.html';


app.get('/', myRoute);
function myRoute (req, res) {
    // res.send('Hello Express');
    res.sendFile(absolutePath);
}

stylePth = __dirname + '/public';
app.use(express.static(stylePth));

const MESSAGE_STYLE = process.env.MESSAGE_STYLE;

app.get('/json', (req, res) => {
    let message = 'Hello json'
    if (MESSAGE_STYLE ==='uppercase'){
        message = message.toUpperCase()
    }
    res.json({"message" : message})
})
































 module.exports = app;
