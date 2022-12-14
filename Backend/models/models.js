const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//collection for intakeData for clients includes the embedded address object schema
let primaryDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },
    org_id:{
        type: Number,
        default:  parseInt(process.env.ORG_ID)
    },

    org_name:{
        type: String,
        default:process.env.ORG_NAME
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
    collection: 'primaryData',
    timestamps: true
});



//collection for eventData includes embedded address object schema
let eventDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },
    
    eventName: {
        type: String,
        required: true
    },
    org_id:{
        type: Number,
        default:  parseInt(process.env.ORG_ID)
    },
    services: [{
        type: String,
        required: true
    }],
    date: {
        type: Date,
        required: true
    },
    address: {
        line1: {
            type: String
        },
        line2: {
            type: String,
        },
        city: {
            type: String,
        },
        county: {
            type: String,
        },
        zip: {
            type: Number,
        }
    },
    description: {
        type: String,
    },
    // acts as the list of attendees 
    attendees: [{
        type: String,
        default: null
    }]
}, {
    collection: 'eventData'
});







// create models from mongoose schemas
const primarydata = mongoose.model('primaryData', primaryDataSchema);
const eventdata = mongoose.model('eventData', eventDataSchema);
// const clientaddress = mongoose.model('cilentaddress',cilentaddressSchema)
// package the models in an object to export 
module.exports = { primarydata, eventdata }
