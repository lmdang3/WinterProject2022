// Lam Dang
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //better debugging
const cors = require("cors");
//allow using a .env file
require("dotenv").config();   

//creates a new instance of express application
const app = express();

// add cors header to the server
app.use(cors({
  origin: '*'
}));

//sets up mongoose for the mongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

//declare port number for the api
// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT ;

const ORG_NAME = process.env.ORG_NAME;
console.log(PORT)
console.log(ORG_NAME)

// setting up the enviroment variable to be exported
var Organization_Name = process.env.Organization_Name;
console.log(Organization_Name)




//setup
app.use(express.json());
app.use(morgan("dev"));

//import routes
const userDataRoute  = require('./routes/userData');
const bookDataRoute  = require('./routes/bookData');
const userRatingDataRoute  = require('./routes/userRatingData');

// //setup middle ware for routes
app.use('/userData', userDataRoute);
app.use('/bookData', bookDataRoute);
app.use('/userRatingData', userRatingDataRoute);

app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});

//error handler
app.use(function (err, req, res, next) {
  // logs error and error code to console
  console.error(err.message, req);
  if (!err.statusCode)
    err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

