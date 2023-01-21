const express = require("express"); 
const router = express.Router(); 
const uuid = require('uuid');



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
        {_id: req.params.id }, 
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
router.get("/getcredentials/:email/:password", (req, res, next) => { 
    userData.find({ account: { email: req.params.email, password :req.params.password}}, 
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                
                // returns the single object cause we arent gonna have more than one piece of data returned
                res.json(data[0]);
                console.log(data)
            }
        }

    ).sort({ 'updatedAt': -1 }).limit(10);
});


//GET a uuid based off of credentials may set up more logic im going to confirm here that there is a token returned 
router.get("/getToken/:email/:password/:webToken", (req, res, next) => { 

    if (!req.params.email || !req.params.password || !req.params.webToken) {
        console.log("not correct data")
        return next(new Error('Incorrect Data'));
    }
        else {
    
    userData.find({ account: { email: req.params.email, password :req.params.password}}, 
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data[0]);
                const token = uuid.v4();
                req.session.token = token;
                res.json({ token });
                // console.log(data)
            }
        }

    ).sort({ 'updatedAt': -1 }).limit(10);
}

});


//GET users based off of their phone numbers
// http://localhost:3000/primaryData/getnum/8329412894
// router.get("/getnum/:nums", (req, res, next) => { 
//     let dbQuery = "";
//     dbQuery = { phoneNumbers: { "$all" : req.params.nums} } 
//     // console.log(req.params.nums)
//     // console.log(dbQuery)
//     userData.find(dbQuery , 
//         (error, data) => { 
//             if (error) {
//                 return next(error);
//             } else {
//                 res.json(data);
//             }
//         }
//     );
// });

//POST
router.post("/", (req, res, next) => { 
    userData.create( 
        req.body,
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                console.log("data has been added")
                res.json(data); 
            }
        }
    );
    userData.createdAt;
    userData.updatedAt;
    userData.createdAt instanceof Date;
});

// deleting using object id 

router.delete("/:id", (req,res,next)=>{ 
    userData.deleteOne(
        {_id:req.params.id}, 
        (error,data)=>{
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












// Lam to LZT
// seperating it here cause we dont need any of these other stuff at the moment, make and update more apis as we
// go further into the project







// Lam
// remove attendee from all event
// utlizes the update many function and pull all method
// router.put("/events/:id", (req,res,next)=>{
//     userData.updateMany({
//         $pullAll: {
//             attendees: [req.params.id]

//         }},(error,data)=>{
//             if (error) {
//                 console.log(error)
//                 return next(error);
//             }
                
//                 else {
//                     res.json("attendee removed from all events")
//                     console.log(data)

//                 }
        
                  
//             });
//         });

// Lam 
// removing an attendee from a specific event
// gonna reuse code but it should be able to work
// gotta implement this to api tommorow 
// takes in two parameters one for the event id and the other for the cilent id afterwards it removes
// the attendee using the parameters

// router.put("/unattend_event/:eventid/:id", (req, res, next) => { 

//     // console.log(req.query.cilentid)
//     // console.log(req.query["eventid"])
//     eventdata.updateOne( 
//         { _id: req.params.eventid},
//             {  $pullAll: {
//                 attendees: [req.params.id] } 

    
//             },(error,data)=>{
//                 if (error) {

                    
//                     console.log(error)
//                     return next(error);
//                 }
                    
//                     else {
//                         res.json("attendee has been removed")

    
//                     }
            
                      
//                 });
//             });


        


//GET clients off of their number
// http://localhost:3000/primaryData/getnum/8329412894
// router.get("/getnum/:nums", (req, res, next) => { 
//     let dbQuery = "";
//     dbQuery = { phoneNumbers: { "$all" : req.params.nums} } 
//     // console.log(req.params.nums)
//     // console.log(dbQuery)
//     primarydata.find(dbQuery , 
//         (error, data) => { 
//             if (error) {
//                 return next(error);
//             } else {
//                 res.json(data);
//             }
//         }
//     );
// });


// Lam 
// count of cilents who signed up for events past two months 
// router.get("/search_attendee_2_months/", (req,res,next)=>{

//     eventdata.find(

//         // taking two condtions must match the org_id as well as the date requirement
// {
//     $and: [

// {
//     date: {
//         $gte: subtractMonths(new Date(), 2),
//         $lte: new Date()
// }},

//    { org_id:process.env.ORG_ID }

//     ]}



//     ,{eventName:1,attendees:1,date:1,org_id:1},
//     (error, data) => { 
//         if (error) {
//             return next(error);
//         } else {
        
            
//             // console.log(data);
//             // lam test 
           
//             var dict = {}

//             // loops through the obj to grab the values within the objects
//             // dict drabs the distinct values tied to an event
//             // the array act as a counter to count the total num of attendees over all
         
//             for (const i in data) {   
//                     // count.push(x)
//                     if (data[i]["attendees"].length === 0) {
//                         dict[data[i]["eventName"]] = 0
//                     }
//                 for (const [key, value] of Object.entries(data[i]["attendees"])) {
//                     // console.log(key, value);
//                     if (dict.hasOwnProperty(data[i]["eventName"]) & data[i]["attendees"].length > 0) {
//                         dict[data[i]["eventName"]] = dict[data[i]["eventName"]]+1
//                     }

//                     else if (data[i]["attendees"].length > 0){
//                         dict[data[i]["eventName"]] = 1
//                     }
//                     }
//               }
//               res.json(dict);
            
//         }
//     }
// )
// });

// Lam 
// count of cilents who signed up for events past two months is formatts it correctly to match the requirements of chart.js
// router.get("/search_attendee_chart/", (req,res,next)=>{

//     eventdata.find({
//         $and: [
    
//     {
//         date: {
//             $gte: subtractMonths(new Date(), 2),
//             $lte: new Date()
//     }},
    
//        { org_id:process.env.ORG_ID }
    
//         ]}
//     ,{eventName:1,attendees:1,date:1,org_id:1},
//     (error, data) => { 
//         if (error) {
//             return next(error);
//         } else {
        
            
//             // console.log(data);
//             // lam test 
           
//             var list = []

//             // loops through the obj to grab the values within the objects
//             // dict drabs the distinct values tied to an event
//             // the array act as a counter to count the total num of attendees over all
         
//             for (const i in data) {   
//                 var dict = {}
//                     // count.push(x)
//                     if (data[i]["attendees"].length === 0) {
//                         dict["eventName"] = data[i]["eventName"]
//                         dict["attendees"] = 0
//                         list.push(dict)
                        
                    
//                     }
//                     else {
//                         dict["eventName"] = data[i]["eventName"]
//                         dict["attendees"] = data[i]["attendees"].length
//                         list.push(dict)
//                     }
                    
//             // console.log(list)
//                 }

//             res.json(list);
//             }

//     }
// )
// });



module.exports = router;
