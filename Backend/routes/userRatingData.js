const express = require("express");
const router = express.Router();
require("dotenv").config();
// Lam
//importing data model schemas
let {userRating}= require("../models/models"); 


// gets all userRatings 
router.get("/", (req, res, next) => { 
    userRating.find((error, data) => {

        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//GET single rating by objectid
router.get("/id/:id", (req, res, next) => { 
    userRating.find({ _id: req.params.id }, (error, data) => {
        console.log(req.params.id)
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


//POST method to add new userRating
router.post("/", (req, res, next) => { 
    userRating.create( 
        req.body, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

// PUT Method to update any information about an organization 
router.put("/:id", (req, res, next) => {
    userRating.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

// deleting a userRating using objectid
router.delete("/:id", (req, res, next) => { 
    userRating.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json("Rating has been deleted")
        }
    })
});

// keeping this cause i like the idea but may not be needed

//GET entries based on search query
// http://localhost:3000/organizationData/search/?org_id=3&searchBy=id
// http://localhost:3000/organizationData/search/?org_name=Shell&searchBy=name

// router.get("/search/", (req, res, next) => { 
//     let dbQuery = "";
//     if (req.query["searchBy"] === 'name') {
//         dbQuery = { org_name: { $regex: `^${req.query["org_name"]}`, $options: "i" } }
//     } else if (req.query["searchBy"] === 'id') {
//         dbQuery = {
//             org_id:  req.query["org_id"]
//         }
//     };
//     organization.find( 
//         dbQuery, 
//         (error, data) => { 
//             if (error) {
//                 return next(error);
//             } else {
//                 res.json(data);
//             }
//         }
//     );
// });




module.exports = router;
