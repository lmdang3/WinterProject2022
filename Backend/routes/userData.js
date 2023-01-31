const express = require("express");
const router = express.Router();
// const uuid = require('uuid');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const secretKey = 'SecurityKEYexample';
const outKey = "SecureOutput"

// checking to see if this method is better


//importing data model schemas
let { userData } = require("../models/models");

// let { eventdata } = require("../models/models"); 

// keeping this to deal with dates
//  https://dirask.com/posts/JavaScript-subtract-months-from-date-pVmgGD#:~:text=In%20this%20article%2C%20we%20would%20like%20to%20show,2%29%3B%20%2F%2F%20subtracted%202%20months%20from%20existing%20date
const subtractMonths = (date, months) => {
    const result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
};


//GET all entries
router.get("/", (req, res, next) => {
    userData.find(
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    ).sort({ 'updatedAt': -1 }).limit(10);
});

//GET single entry by ID
router.get("/:id", (req, res, next) => {
    userData.find(
        { _id: req.params.id },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});


//GET all data on the user once verified 
// router.get("/getcredentials/:email/:password", (req, res, next) => {
//     userData.findOne({ account: { email: req.params.email, password: req.params.password } }, // find one turns it into {} oppose to array 
//         (error, data) => {
//             if (error) {
//                 return res.status(401).json({ message: 'Invalid email or password' });
//             } else {

//                 // reformatting the payload before encryption
//                 const payload = { "email": data.account.email,
//                 "phoneNumber": data.phoneNumbers.primaryPhone ,
//                 "firstName": data.firstName,
//                 "middleName": data.middleName,
//                 "lastName": data.lastName};
//                 // used in conjunction with json web token
   
//                 const options = { expiresIn: '1d' };
//                 const token = jwt.sign(payload, secretKey, options);
//                 res.json({ token });
//                 // res.json(data);
//                 // console.log(data)
//                 console.log({ token })
//             }
//         }

//     ).sort({ 'updatedAt': -1 }).limit(10);
// });


// GET a encrypted payload off of credentials may set up more logic im going to confirm here that there is a token returned 
router.get("/getToken/:token", (req, res, next) => {
    try {
        // Decode the token and extract the email and password from the payload
        const decoded = jwt.verify(req.params.token, secretKey);
        const email = decoded.email;
        const password = decoded.password
        // Use the email and password to query the database
        userData.findOne({ account:{ email: email, password: password }}, (error, data) => {
            if (error) {
                return next(error);
            } else if (data) {
                // reformatting the payload before encryption
                const payload = { "email": data.account.email,
                "phoneNumber": data.phoneNumbers.primaryPhone ,
                "firstName": data.firstName,
                "middleName": data.middleName,
                "lastName": data.lastName};
                // used in conjunction with json web token
   
                const options = { expiresIn: '1d' };
                const token = jwt.sign(payload, secretKey, options);
                res.json( token );
                console.log("success")
            }
        });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});


// GET a uuid based off of credentials may set up more logic im going to confirm here that there is a token returned 
router.get("/userlogin/:token", (req, res, next) => {
    try {
        // Decode the token and extract the email and password from the payload
        console.log("this is key",secretKey)
        const decoded = jwt.verify(req.params.token, secretKey);
        console.log("this is decoded",decoded)
        const email = decoded.email;
        const firstName = decoded.firstName
        const lastName = decoded.lastName
        const middleName = decoded.middleName
        const phoneNumber = decoded.phoneNumber
        // Use the email and password to query the database
        userData.findOne({ "account.email": email,firstName:firstName, lastName: lastName,middleName:middleName, "phoneNumbers.primaryPhone":phoneNumber }, (error, data) => {
            if (error) {
                return next(error);
            } else if (data) {
                // reformatting the payload before encryption
                const payload = { "email": data.account.email,
                "phoneNumber": data.phoneNumbers.primaryPhone ,
                "firstName": data.firstName,
                "middleName": data.middleName,
                "lastName": data.lastName};
                res.json(payload);
                console.log("this is payload", payload)

            }
        });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

//GET data on the user using email returns a yes or no 
router.get("/checkEmail/:token/", (req, res, next) => {
   
    const decrypted = process.env.Decrypt
    console.log("this is the env",decrypted)
    const decoded_email = jwt.verify(req.params.token, decrypted);
    console.log("this is decoded",decoded_email)
    userData.findOne({ "account.email": req.params.email} , // should be an single object
        (error, data) => {
            if (error) {
                
                return res.status(401).json({ message: 'user already exists with the email' });
               
            } else {

                console.log(data);
                res.json(data);

            }
        }

    ).sort({ 'updatedAt': -1 }).limit(10);
});


//POST adds the data using a token
router.post("/", (req, res, next) => {

    const password =  req.body.password
    const saltRounds = Math.floor(Math.random() * (15 - 5 + 1) + 5);

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hashedPassword) {
            // Store the salt and the hashed password in the database
            let payload = {
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                LastName: req.body.LastName,
                account:{
                    email: req.body.email,
                    // needs to be hashed havent done yet
                    "password": password,
                    

                },
                address:{
                    line1: req.body.line1,
                    line2: req.body.line2,
                    city: req.body.city,
                    state: req.body.state,
                    country: req.body.country,
                    zip: req.body.zip
                }
        
            }
          
            userData.create(
                payload,
                (error, data) => {
                    if (error) {
                        return next(error);
                    } else {
                        console.log("data has been added")
                        res.json(data);z
                    }
                }
            );
            userData.createdAt;
            userData.updatedAt;
            userData.createdAt instanceof Date;
        });
    });
    
});

// deleting using object id 
router.delete("/:id", (req, res, next) => {
    userData.deleteOne(
        { _id: req.params.id },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                console.log("data has been deleted")
                res.json("user has been deleted");
            }
        }
    );
});

//PUT update by object id 
router.put("/:id", (req, res, next) => {
    userData.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                console.log("changes has been added")
                res.json(data);

            }
        }
    );
});





module.exports = router;
