const { Schema, model } = require('mongoose');

const CongressSchema = new Schema 
({
    name: {
        type: String
    },
    party: {
        type: String
    },
    link: {
        type: String
    }

})

module.exports = model("Congress", CongressSchema )