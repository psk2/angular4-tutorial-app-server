var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var stateJson = require("./states.json");
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send("Use /state/IND and /api/books for accessing");
});


// ===================== States =====================

app.get('/state/IND', (req,res)=>{
    res.json(stateJson);
    
});

app.get('/state/IND/:stateId', (req,res)=>{
    var stateID = req.params.stateId;
    var state = stateJson.RestResponse.result.filter(state => {
        return state.abbr == stateID;
    });
    res.json(state);
    
});

app.listen(3000);
console.log('Node is running on port 3000....');