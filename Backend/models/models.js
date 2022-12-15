const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//collection for intakeData for clients includes the embedded address object schema
// acts as the schema for our user
let userDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },

    // dont really need a org id due to not doing multiple instances however good to know 
    organization_Name:{
        type: Number,
        default:  parseInt(process.env.Organization_Name)
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

    email: {
        type: String,
        required: true
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
        county: {
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

    description: {type: String,
        required: true
    },
    
    isbns: 
        {
          isbn10: {type:String
        }
          ,
          isbn13: {
            type: String
        }
        }
      ,
    

    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
    },
    // acts as the list of user ids
    userReviews: [{
        type: String,
        default: null
    }]
}, {
    collection: 'bookData'
});



// create models from mongoose schemas
const userdata = mongoose.model('userData', userDataSchema);
const bookdata = mongoose.model('bookData', BooksDataSchema);
// const clientaddress = mongoose.model('useraddress',useraddressSchema)
// package the models in an object to export 
module.exports = { userdata, eventdata }
