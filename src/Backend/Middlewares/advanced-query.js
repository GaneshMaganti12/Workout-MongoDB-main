const expressAsyncHandler = require("express-async-handler");

const advancedQuery = (model) => expressAsyncHandler( async(req, res, next) => {

    console.log(req.query.select) 

    console.log("heyyyyy",req.query)
    let query =  model.find();
    if(req.query.select){
        let fields = req.query.select.split(',').join(' ')
        query = query.select(fields)
        
    }

    console.log('after select...');

    
    if(req.query.sort){
        query = query.sort(req.query.sort)
    }

    console.log('after sort...');
   
    

    let results = await query;

  

    console.log(results);

    res.advancedQueryResult = {
        success: true,
        data: results
    }

    next();
    

  
})

module.exports = advancedQuery;