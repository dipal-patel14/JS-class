var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

(() => {
    let conn;
    mongo.connect(url)
            .then((client) => {
              conn = client;
              return client.db("test");
            })
            .then((db) => db.collection("Login"))
            .then((collection) => collection.find())
            .then(cursor => cursor.toArray())
            .then(data => app.locals.users = data)
            .then(() => conn.close());
})();

app.use(express.static('public'));


app.get("/Login", function (req, res) {
    if (req.session.isAuthenticated) {
        res.redirect("/success/user/" + req.session.uname);
    } else {
        if (req.session.try === undefined) req.session.try = 0;
        if (req.session.try === 3) res.redirect("Failure");
        else res.redirect("/Login.html");
    }

});

app.get("/Logout", function (req, res) {
    req.session.destroy();
    return res.redirect("/Login.html");
});

app.post('/authenticator', function (req, res) {
    if (req.session.try === undefined)
        res.redirect("/Login");
    else if (req.session.try < 3) {
        var Name = req.body.name;
        var Password = req.body.pass;
        console.log("Name is " + Name);
        console.log("Pass is " + Password);
        var userRecord = app.locals.users.filter(doc => Name === doc.username);
        console.log(userRecord[0]);
        if (userRecord[0] !== undefined) {
            if (Password === userRecord[0].password) {
                req.session.isAuthenticated = true;
                req.session.uname = Name;
                res.redirect("/success/user/" + req.session.uname);
            } else {
                req.session.try++;
                res.redirect("/Login");
            }
        }
        else {
                req.session.try++;
                res.redirect("/Login");
        }
    } else res.redirect("/Failure");
});


app.get('/success/user/:name', function (req, res) {
    if (req.session.isAuthenticated) {
        res.send("<h1>Welcome " + req.params.name + "</h1>");
    } else res.redirect("/Login");
});


app.get('/Failure', function (req, res) {
    setTimeout(()=>req.session.destroy(),3000);
    res.redirect("/Failure.html");
});


app.listen(8081, function () {
    console.log('ExpressJS is running on port 8081');
});