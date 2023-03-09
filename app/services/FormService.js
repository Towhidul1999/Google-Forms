const Form = require('../models/mongoose/Form');
const { db } = require('../helpers');

async function add (data) {
    let newForm = new Form(data);
    return await newForm.save();
}

async function modify (data) {
    const updateForm = await Form.findById(data.id);

    updateForm.answer = data.answer

    await updateForm.save();

    return  {
        updateForm
    }
}

module.exports = {
    add,
    modify
}