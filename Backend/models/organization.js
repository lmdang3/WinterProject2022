const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//collection for OrganizationData
let organizationSchema = new Schema({
    //object ID created for each organizations
    _id: { type: String, default: uuid.v1 },
    //ID number to identify the organziation
    org_id: {
        type: Number,
        default:  parseInt(process.env.ORG_NAME)
    },
    //Name of organization
    org_name: {
        type: String,
        default:  parseInt(process.env.ORG_ID)
    },


}, {

    collection: 'organizationData'

});


const organizationdata = mongoose.model('organizationData', organizationSchema);
module.exports = { organizationdata }
//module.exports = mongoose.model('organization', organizationSchema);
// package the models in an object to export 
