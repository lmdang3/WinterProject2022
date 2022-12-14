const express = require("express");
const router = express.Router();
// Lam

//allow using a .env file
require("dotenv").config();


//importing data model schemas
let { eventdata } = require("../models/models"); 

//  https://dirask.com/posts/JavaScript-subtract-months-from-date-pVmgGD#:~:text=In%20this%20article%2C%20we%20would%20like%20to%20show,2%29%3B%20%2F%2F%20subtracted%202%20months%20from%20existing%20date
const subtractMonths = (date, months) => {
    const result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
  };



//GET all entries
router.get("/", (req, res, next) => { 
    eventdata.find(    {
        org_id:process.env.ORG_ID
        },
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
router.get("/id/:id", (req, res, next) => { 
    eventdata.find(
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

//GET entries based on search query
//Ex: '...?eventName=Food&searchBy=name' 
router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'date') {
        dbQuery = {
            date:  req.query["eventDate"]
        }
    };
    eventdata.find( 
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

//GET events for which a client is signed up
router.get("/client/:id", (req, res, next) => { 
    eventdata.find( 
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

//POST new event
router.post("/", (req, res, next) => { 
    eventdata.create( 
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
    eventdata.findOneAndUpdate(
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
    eventdata.deleteOne(
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
    eventdata.find( 
        {_id: req.params.id, attendees: req.body._id }, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                if (data.length == 0) {
                    eventdata.updateOne(
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

    eventdata.find({
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