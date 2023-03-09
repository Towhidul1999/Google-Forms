const mongoose = require('mongoose');

// fields definition
const fields = {
    form : {
        type : Array,
        required: true
    }
}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true})

// wrap schema with mongoose model
const model = mongoose.model('Form', schema);

module.exports = model;