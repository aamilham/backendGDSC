const mysql = require("mysql");
const express = require("express");
const { sendFile, redirect } = require("express/lib/response");
const bodyParser = require("body-parser");
const { NULL } = require("mysql/lib/protocol/constants/types");
const encoder = bodyParser.urlencoded();
const app = express();
require("dotenv").config();
var logged = false;
var user = NULL
var isWrongPass = false;

var movie0 = true;
var movie1 = false;
var movie2 = false;
var movie3 = false;
var movie4 = false;
var movie5 = false;
var movie6 = false;
var movie7 = false;
var movie8 = false;
var movie9 = false;
var movie10 = false;
var movie11 = false;
var movie12 = false;
var movie13 = false;
var movie14 = false;
var movie15 = false;
var movie16 = false;
var movie17 = false;
var movie18 = false;
var movie19 = false;
var movie20 = false;

app.set('view engine', 'pug')
app.use(express.static('public'));
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function(error){
    if (error) throw error 
    else console.log(`connected to http://localhost:${process.env.PORT}/`)
})

app.get("/", function(req, res){
    if (logged === false){
        res.redirect("/login")
    } else {
        res.render('index', { message: `Hello, ${user}!` })
    } 
})

app.get("/login", function (req, res){
        if (isWrongPass === false) {
            res.render('login', {title: "Login Page"});
        } else {
            res.render('login2', {title: "Login Page"});
        }
})

app.post("/login", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[username, password], function(error, results, field){
        if (results.length > 0) {
            res.redirect("/");
            logged = true
            isWrongPass = false
            user = username
            console.log(results)
        } else {
            isWrongPass = true
            res.redirect("/");
            console.log(results)
        }
        console.log(user)
        res.end();
    })
})

app.get("/register", function (req,res){
    res.render('register', {title: "Register Page"});
})

app.post("/register", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    isWrongPass = false;

    connection.query(`insert into loginuser (user_name, user_pass) values ('${username}','${password}')`, function(error, results, field){
        if (results.length > 0) {
            res.redirect("/");
            console.log(results)
        } else {
            res.redirect("/");
            console.log(results)
        }
        res.end();
    })
})

app.get('/wishlist', function (req, res){
    res.render('wishlist', {
        title: "Wishlist Page", 
        message: `Hello, ${user}!`,
        movie0: movie0,
        movie1: movie1,
        movie2: movie2,
        movie3: movie3,
        movie4: movie4,
        movie5: movie5,
        movie6: movie6,
        movie7: movie7,
        movie8: movie8,
        movie9: movie9,
        movie10: movie10,
        movie11: movie11,
        movie12: movie12,
        movie13: movie13,
        movie14: movie14,
        movie15: movie15,
        movie16: movie16,
        movie17: movie17,
        movie18: movie18,
        movie19: movie19,
        movie20: movie20,
    });
});

app.get('/gettingWishlist', function (req, res){
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '0'`, function (err, results){
        if (results.length > 0){
            movie0 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '1'`, function (err, results){
        if (results.length > 0){
            movie1 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '2'`, function (err, results){
        if (results.length > 0){
            movie2 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '3'`, function (err, results){
        if (results.length > 0){
            movie3 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '4'`, function (err, results){
        if (results.length > 0){
            movie4 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '5'`, function (err, results){
        if (results.length > 0){
            movie5 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '6'`, function (err, results){
        if (results.length > 0){
            movie6 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '7'`, function (err, results){
        if (results.length > 0){
            movie7 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '8'`, function (err, results){
        if (results.length > 0){
            movie8 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '9'`, function (err, results){
        if (results.length > 0){
            movie9 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '10'`, function (err, results){
        if (results.length > 0){
            movie10 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '11'`, function (err, results){
        if (results.length > 0){
            movie11 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '12'`, function (err, results){
        if (results.length > 0){
            movie12 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '13'`, function (err, results){
        if (results.length > 0){
            movie13 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '14'`, function (err, results){
        if (results.length > 0){
            movie14 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '15'`, function (err, results){
        if (results.length > 0){
            movie15 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '16'`, function (err, results){
        if (results.length > 0){
            movie16 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '17'`, function (err, results){
        if (results.length > 0){
            movie17 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '18'`, function (err, results){
        if (results.length > 0){
            movie18 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '19'`, function (err, results){
        if (results.length > 0){
            movie19 = true
        }
    })
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}' and movie_id = '20'`, function (err, results){
        if (results.length > 0){
            movie20 = true
        }
    })
    res.redirect('/wishlist')
})

app.get("/wishlistapi", function (req, res){
    
    connection.query(`SELECT movie_id FROM wishlist where user_name = '${user}'`, function (err, results) {
        res.send(results)
        })
    })

app.get("/logout", function (req, res){
    logged = false
    res.redirect("/login")
})

app.get("/inputmovie0", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '0')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie1", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '1')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie2", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '2')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie3", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '3')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie4", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '4')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie5", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '5')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie6", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '6')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie7", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '7')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie8", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '8')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie9", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '9')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie10", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '10')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie11", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '11')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie12", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '12')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie13", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '13')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie14", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '14')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie15", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '15')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie16", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '16')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie17", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '17')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie18", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '18')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie19", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '19')`, function (err, results) {
        res.redirect("/")
    })
})

app.get("/inputmovie20", function (req, res){
    connection.query(`INSERT INTO wishlist (user_name, movie_id) values ('${user}', '20')`, function (err, results) {
        res.redirect("/")
    })
})



app.listen(process.env.PORT);
