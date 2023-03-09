const Handler = lulu.use('app/errors/Handler');
const FormService = lulu.use('app/services/FormService');
const response = lulu.use('app/responses/Response');
const Event = lulu.use('app/responses/Event');

module.exports = {

    //User Registartion
    create : async function (req, res) {
        try{
            const newForm = await FormService.add(req.body);
            return response.dispatch("Form Created Successfully", {newForm}, res, 201); // wrap data in object to avoid confusion
        }
        catch(error){
            return response.error(Handler(error), res);
        }
    },

    update: async function (req, res) {
        try {
            const updateUser = await FormService.modify({
                id: req.params.id,
                form: req.body.form
            });
            return response.dispatch("Form Created Successfully", {updateUser}, res, 201);
        } catch (error) {
            return response.error(Handler(error), res);
        }
    }

}