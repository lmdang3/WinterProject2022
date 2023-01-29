const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//collection for intakeData for clients includes the embedded address object schema
// acts as the schema for our user
let userDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },

    // dont really need a org id due to not doing multiple instances however good to know 
    // we dont have to insert into the body but i want to show that it is possible
    organization_Name:{
        type: String,
        default:  process.env.Organization_Name
    },

    firstName: {
        type: String,
        required: true
        
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true
    },

    account:{
        
        email: {
        type: String,
        required: true,
        unique: true 
    },
    
        password: {
            type: String,
            required: true
        },
        saltRound: {
            type: Number,
            required: true
        }
    },
    
    phoneNumbers: {
        primaryPhone: {
            type: Number,
            required: true,
            unique: true,


        },
        seondaryPhone: 
        {
            type: Number,
            
          
        }
    },
    address: {
        line1: {
            type: String,
            required: true
        },
        line2: {
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        }
}
}, {
    collection: 'userData',
    timestamps: true
});



//collection for eventData includes embedded address object schema
let BooksDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },
    
    title : {
        type: String,
        required: true
    },
    author: {
    type: String,
    required: true

    },
    publisher: {
        type: String,
        required: true
    
        },
    
    description: {type: String,
        required: true
    },

    isbns: 
        {
          isbn10: {
            type:String,
            required: true 
        }
          ,
          isbn13: {
            type: String,
            required: true
        }
        }
      ,
    // acts as the list of user ids with desciption and rating 
    // even if you add a book without a review it is still okay
    userReviews: [
        {
    userid:{
        type: String,
        required: true
    },
    description: {
        type: String,
     
    },
    rating: {
        type: Number,
        required: true 
    },
    date: {
        type: Date,
        required: true
    }
}
],

    bookCover: {
        type: Buffer, // casted to MongoDB's BSON type: binData
       default: null 
    }

}, {
    collection: 'bookData'
});

let userRatingSchema = new Schema({
    _id: { type: String, default: uuid.v1 },

    user_id: { 
        type: String,
         required:true  
        },

    book_id: {

        type: String,
        required: true
    },

    date: {

        type: String,
        required: true
    },

    rating: {
        type: Number,
        required: true
    },

    description: {

        type: String,
    
    }

}, {
    collection: 'userRating'
});

// create models from mongoose schemas
const userData = mongoose.model('userData', userDataSchema);
const bookData = mongoose.model('bookData', BooksDataSchema);
const userRating = mongoose.model('userRating',  userRatingSchema);

// package the models in an object to export 
module.exports = { userData, bookData, userRating }
