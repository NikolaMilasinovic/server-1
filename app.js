const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const login = require("./controlers/login");
const links = require("./controlers/links");
const link = require("./controlers/link");
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'server1db'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});
const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());



app.get('/links', (req,res) => {links.getLinks(req,res,db)});

app.put('/link/:id', (req,res) => {link.getLink(req,res,db)});

app.post('/login', (req,res) => {login.handleSignin(req,res,db)});


app.listen(PORT, function(){
	console.log(`App is running on port ${PORT}`);
})

