const express = require("express");
const router = express.Router();
// Lam

//allow using a .env file but in the case of this project only using it to teach not really needed for this project
require("dotenv").config();


//importing data model schemas
let { bookData } = require("../models/models"); 

// function used to handle dates
//  https://dirask.com/posts/JavaScript-subtract-months-from-date-pVmgGD#:~:text=In%20this%20article%2C%20we%20would%20like%20to%20show,2%29%3B%20%2F%2F%20subtracted%202%20months%20from%20existing%20date
const subtractMonths = (date, months) => {
    const result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
  };



//GET all book entries
router.get("/", (req, res, next) => { 
    bookData.find(    {
        org_id:process.env.ORG_ID
        },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
                console.log(data)
            }
        }
    ).sort({ 'updatedAt': -1 }).limit(10);
});

//GET single entry by ID
router.get("/id/:id", (req, res, next) => { 
    bookData.find(
        {
        $and: [
          {
            _id: req.params.id
          },
          {
            org_id:process.env.ORG_ID
            }
          ]}
        
      
        
        , (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


//GET events for which a client is signed up
router.get("/client/:id", (req, res, next) => { 
    bookData.find( 
        { attendees: req.params.id }, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//POST new book
router.post("/", (req, res, next) => { 

    bookData.create( 
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

//PUT update event information by id 
router.put("/:id", (req, res, next) => {
    bookData.findOneAndUpdate(
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

//Lauren 
//DELETE endpoint for an event
router.delete("/:id", (req,res,next)=>{
    bookData.deleteOne(
        {_id : req.params.id}, 
        (error,data)=>{
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});


// Lam Dang
//PUT add attendee to event using client id which is there object_id
// event is placed into the url

router.put("/addAttendee/:id", (req, res, next) => {
    //only add attendee if not yet signed uo
    bookData.find( 
        {_id: req.params.id, attendees: req.body._id }, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                if (data.length == 0) {
                    bookData.updateOne(
                        { _id: req.params.id }, 
                        { $push: { attendees: req.body._id } },
                        (error, data) => {
                            if (error) {
                                return next(data);
                            } else {
                                res.send('Client is added to event.');
                                console.log('Event successfully updated!', data)
                            }
                        }
                    );
                }

            }
        }
    );

});

//Lam and Lauren
//GET for event history for past 2 months with the list of attendees
router.get("/search_2_months/", (req,res,next)=>{

    bookData.find({
    date: {
        $gte: subtractMonths(new Date(), 2),
        $lte: new Date()
    }}
    ,{eventName:1,attendees:1,date:1},
    (error, data) => { 
        if (error) {
            return next(error);
        } else {
        
            res.json(data);   
        }
    }
)
});





module.exports = router;