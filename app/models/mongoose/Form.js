const mongoose = require('mongoose');

// fields definition
const fields = {
    form : {
        type : Array,
    },
    answer: {
        type: Array,
        required: false
    }
}

// wrap fields with mongoose schema
const schema = mongoose.Schema(fields, {timestamps: true});

// wrap schema with mongoose model
const model = mongoose.model('Form', schema);

module.exports = model;