require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3020;

const node_session_secret = '67f625f1-3e34-48d9-9f7b-913f7cdad4c3';

const Joi = require('joi');
const schema = Joi.string().max(20).required();


const validationResult = schema.validate(req.body.username);
if (validationResult.error != null) {
    res.redirect('/login');
    return;
}

const result = await userCollection.find({username: username}).toArray();

app.use(session({
    secret: node_session_secret,
    //store: mongoStore, //default is memory store
    saveUninitialized: false,
    resave: true
}
));

app.get

//var numPageHits = 0;

app.get('/', (req,res) => {
    if (req.session.numPageHits == null) {
    req.session.numPageHits = 0;
    } else {
    req.session.numPageHits++;
    }
    //numPageHits++;
    res.send('You have visited this page: ' + req.session.numPageHits + ' times!');
});


app.listen(port, () => {
    console.log("Node applicatoin is listening on port " + port);
});