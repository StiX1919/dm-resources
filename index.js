const express = require('express')
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');


const port = 3001;
const app = express();



//MASSIVE

app.use(json());
app.use(cors());

app.use(session({
    secret: 'MoveToConfigPlz123',
    resave: false,
    saveUninitialized: false
}));

app.get('/api/testThing', (req, res, next) => {
    res.send('red')
})

//SAVED FOR BUILD
//app.use(express.static(`${__dirname}/public/build`));
//



//LISTENING
app.listen (port, ()=> {
    console.log(`Listening on port: ${port}`);
})