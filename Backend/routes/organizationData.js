const express = require("express");
const router = express.Router();
require("dotenv").config();
// Lam
//importing data model schemas
let {organizationdata}= require("../models/organization"); 



//GET single entry by ID
router.get("/id/:id", (req, res, next) => { 
    organization.find({ org_id: req.params.id }, (error, data) => {
        console.log(req.params.id)
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});



//GET single entry by ID
router.get("/id/:id", (req, res, next) => { 
    organization.find({ org_id: req.params.id }, (error, data) => {
        console.log(req.params.id)
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


//GET organization name per instance
router.get("/", (req, res, next) => { 
    organizationdata.find({organizationID: process.env.ORG_NAME }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(process.env.ORG_NAME)
        }
    }
    ).sort({'updatedAt':-1}).limit(10);
});



//GET entries based on search query
// http://localhost:3000/organizationData/search/?org_id=3&searchBy=id
// http://localhost:3000/organizationData/search/?org_name=Shell&searchBy=name

router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { org_name: { $regex: `^${req.query["org_name"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'id') {
        dbQuery = {
            org_id:  req.query["org_id"]
        }
    };
    organization.find( 
        dbQuery, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});


//POST method to add new organization
router.post("/", (req, res, next) => { 
    organization.create( 
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
    organization.findOneAndUpdate(
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

// delete method that deletes an organization
router.delete("/id/:id", (req, res, next) => { 
    organization.deleteOne({ org_id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json("Organization tied to the id has been deleted")
        }
    })
});








module.exports = router;
