
# Nodex Framework

This is an updated Express JS and MongoDB Project Architecture to create Readable & Maintainable API server (That's why this is called Headless). You can clone this and start your project by following the rules written below.




## Features

- MCS [Model, Controller & Service Based Architecture].
- Socket IO Events
- .env or File based basic configs (app.config.js).
- Dedicated Route Folder
- Controllers
- Services
- Error Handlers
- Response Data Models
- Middlewares
- Maintenance Mode
- Emit events from HTTP Controller
- Standalone Seeding System for Mongoose


[More Features are coming soon]
- CLI
- ORM
- TS Version
- Templating Engine



## Installation

Clone this repo and start creating.

```bash
  gh repo clone istiaqme/nodex-headless
  cd nodex-headless
  npm install
  npm start
```


You can copy .env.example information to .env file after creating it in the project root folder.

Or you can use app.config.js file to configure your app.



    
## Important Notes

- Keep route and controller functionalities separate.
- Keep your controller clean.
- Don't use controller for business logics (Abstraction is good for writing better software.).
- Use Services for business logics.
- Try to write your application following DRY (Don't Repeat Yourself) principle.
- If you need middleware feel free to use them.
- You can validate your requests my making request middlewares.
- Make error classes for your own errors, throw them. This is a good practice.

## Usage/Examples

1. Creating a route - 

```javascript
const MeowController = require('../app/controllers/MeowController');
router.get('/cats', MeowController.meowList);
```

2. Controller Function - (app/controllers/MeowController.js)

```javascript
const response = require('../responses/response');
const Handler = require('../errors/Handler');
const MeowService = require('../services/MeowService')

async function meowList (req, res) {

    try{
        const meows = await MeowService.loadAll();
        const resData = {
            meows
        }
        response.dispatch("Meow List", resData, res); // Successful responses should be dispatched using response.dispatch function
    }
    catch(error){
        Handler(error, res)
    }


    /* 
        *** try..catch block is mandatory for a controller function.
        *** To get JSON response an Error should be handled using Handler function.
        *** Use .env or app.config.js to set app debug true or false.
    */
}
```

3. Creating an Error 
Step 1 - (Assuming we are creating an Error called NaughtyMeow) - (app/errors/NaughtyMeow.js)

```javascript
module.exports = class NaughtyMeow extends Error {
    constructor(message){
        super(message);
        this.name = "NaughtyMeow";
    }
}
```
Step 2 - Now you have to register this error in Handler - (app/errors/Handler.js)
```javascript
const response = require('../responses/response');
const {buildMessage, buildData} = require('./ErrorHelper');
module.exports = function (error, res) {
    if(error instanceof require('./NotFoundError')){
        response.dispatch(error.message, {}, res, 404);
    }
    else if(error instanceof require('./ValidationError')){
        response.dispatch(error.message, {}, res, 400);
    }
    else if(error instanceof ReferenceError){
        response.dispatch(buildMessage(error), buildData(error), res, 500);
    }
    else if(error instanceof TypeError){
        response.dispatch(buildMessage(error), buildData(error), res, 500);
    }
    .
    .
    .
    .
    if(error instanceof require('./NaughtyMeowError')){
        response.dispatch(error.message, {}, res, 404); // 404 is demonstration purpose only, use your matching http response code
        // alternatively you can use build functions for message and stack trace depending on app debug status
        response.dispatch(buildMessage(error), buildData(error), res, 500);

    }
    else {
        response.dispatch(buildMessage(error), buildData(error), res, 500);
    }
}
```

Now from wherever you are throwing this error if the last consumer (controller) has try...catch block and the Handler function is used you will get correct json response.







## Author

- Istiaq Hasan - [@istiaqme](https://www.github.com/istiaqme), [istiaq.com](https://istiaq.com)

