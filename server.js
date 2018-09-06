
//Initiallising node modules
var ticker = require('ticker');
const jwt = require('jsonwebtoken');
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express(); 
var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  })); 
  app.use(cookieParser());
  app.use(session({secret: 'candysecret', resave: false, saveUninitialized: false}));
//   app.use(passport.initialize());
//   app.use(passport.session())
//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
    user: 'sa',
    password: 'abcd4ABCD',
    server: '192.168.23.145',
    database: 'CandyBDD'
};

//Function to connect to database and execute query

executeQuery = async function(res, query) {
    // create Request object
    var request = await pool.request();
    // query to the database
    request.query(query, function (err, rs) {
      if (err) {
       
                 console.log("Error while querying database :- " + err);
                 res.send(err);
                 sql.close();
                }
                else {
                  res.send(rs.recordset);
                  sql.close();
                       }
          });
  }   
  
 const  pool = new sql.ConnectionPool(dbConfig,  async function (err) {
         if (err) {   
                     console.log("Error while connecting database :- " + err);
                     res.send(err);
                  }
                });
        
                    



//GET API
app.get("/api/user", function(req , res){
                var query = "select * from [CLIENTS]";
                executeQuery (res, query);
              
});
//getuser by id
app.get("/api/user/:id", function(req , res){
    var query = "SELECT * from [CLIENTS] WHERE (ID='" + req.params.id +"')";
    executeQuery (res, query);
});
//GET USERS 
app.get("/api/listeUsers", function(req , res){
    var query = "select * from [CLIENTS]"; 
    executeQuery (res, query);
    console.log(executeQuery)
  
});

//GET Candies API
app.get("/api/products", function(req , res){
    var query = "select * from [CANDY]"; 
    executeQuery (res, query);
    console.log(executeQuery)
  
});

//POST API
 app.post("/api/user", function(req , res){
                params = [req.body.FIRST_NAME, req.body.LAST_NAME, req.body.EMAIL, req.body.PASSWORDC];
                var query = "INSERT INTO [CLIENTS] (FIRST_NAME,LAST_NAME,EMAIL,PASSWORDC) VALUES ('"+ req.body.FIRST_NAME +"','" + req.body.LAST_NAME + "','" + req.body.EMAIL + "','" + req.body.PASSWORDC + "')";
                executeQuery (res, query);
               
});
    
//PUT API
 app.put("/api/user/:id", function(req , res){
                var query = "UPDATE [CLIENTS] SET FIRST_NAME= " + req.body.Name  +  " , EMAIL=  " + req.body.Email + "  WHERE Id= " + req.params.id;
                executeQuery (res, query);
});

// DELETE API
 app.delete("/api/user/:id", function(req , rs){
                var query = '"DELETE FROM [CLIENTS] WHERE ID="' + req.params.id;
                executeQuery (rs, query);
});


//regisster API
app.post("/api/register", function(req , res){
    sql.connect(dbConfig, function (err) {
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
                 else {
    var request = new sql.Request();
   var  params ={ 
     FIRST_NAME: req.body.firstname, 
     LAST_NAME: req.body.lastname, 
     EMAIL: req.body.email, 
     PASSWORDC : req.body.passwordc
    };
    console.log('SERVERJS PARAMS', params)
    request.query("INSERT INTO [CLIENTS] (FIRST_NAME,LAST_NAME,EMAIL,PASSWORDC) VALUES ('"+ params.FIRST_NAME+"','" + params.LAST_NAME + "','" + params.EMAIL + "','" + params.PASSWORDC + "')", function (err, rs) {
        
        if (err) {
         
                   console.log("Error while querying database :- " + err);
                   res.send(err);
                   sql.close();
                  }
                  else {
                    res.send(rs);
                    sql.close();
                         }
            });
        }
     });
});
//LOGIN API
app.post("/api/login", function(req , res){
    params = [req.body.email, req.body.passwordc];
    var query = "SELECT * from [CLIENTS] WHERE (EMAIL='" + req.body.email + "'AND PASSWORDC='"+ req.body.passwordc +"')";
    executeQuery (res, query);
    // const JWTToken = jwt.sign({
    //     email: req.body.email,
    //     passwordc: req.body.passwordc,
    //     token: JWTToken
    //   },
    //   'secret',
    //    {
    //      expiresIn: '2h'
    //    });
    
    });


    app.post("/api/addCandy", function(req , res){
        sql.connect(dbConfig, function (err) {
            if (err) {   
                        console.log("Error while connecting database :- " + err);
                        res.send(err);
                     }
                     else {
        var request = new sql.Request();
       var  params = { 
        NAME: req.body.name, 
        QUANTITY: req.body.quantity, 
        WEIGHTC: req.body.weightc, 
        PRICE: req.body.price,
        DESCRIPTIONC : req.body.descriptionc,
        CATEGORYCANDY_ID : req.body.categoryid,
        URLIMG : req.body.urlimg
        };
        console.log('SERVERJS PARAMS', params)
        request.query("INSERT INTO [CANDY] (NAME, QUANTITY, WEIGHTC, PRICE, DESCRIPTIONC, CATEGORYCANDY_ID, URLIMG) VALUES ('"+ params.NAME+"','" + params.QUANTITY + "','" + params.WEIGHTC + "','" + params.PRICE + "','" + params.DESCRIPTIONC + "','" + params.CATEGORYCANDY_ID + "','" + params.URLIMG + "')", function (err, rs) {
            
            if (err) {
             
                       console.log("Error while querying database :- " + err);
                       res.send(err);
                       sql.close();
                      }
                      else {
                        res.send(rs);
                        sql.close();
                             }
                });
            }
         });
    });
