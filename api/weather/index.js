module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        // context.res = {
        //     status: 400,
        //     body: "Please pass a name on the query string or in the request body"
        // };
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "name not provided "  
        };
    }
    context.done();
};