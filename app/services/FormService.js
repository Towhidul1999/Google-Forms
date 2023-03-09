const Form = require('../models/mongoose/Form');
const { db } = require('../helpers');

async function add (data) {
    let newForm = new Form(data);
    return await newForm.save();
}

async function modify (data) {
    const updateForm = await Form.findById(data.id);
    const meow = updateForm.form;

    updateForm.form = data.form

    await updateForm.save();

    return  {
        updateForm,
        meow
    }
}

module.exports = {
    add,
    modify
}