const express = require('express');
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get("/comenzi",(req, res)=>{
    res.send(readJSONFile());
});

function readJSONFile(){
    return JSON.parse(fs.readFileSync("comenzi.json"))["comenzi"];
}

app.listen(port,()=>{
    console.log("Listening on port",port,"!");
});

app.post("/comenzi",(req,res)=>{
    const comenzi = readJSONFile();
    comenzi.push(req.body);
    writeJSONFile(comenzi);
    res.send(req.body);
});
 
function writeJSONFile(content){
    fs.writeFileSync(
        "comenzi.json",
        JSON.stringify({comenzi:content}),
        "utf8",
        err=>{
            if(err){
                console.log(err);
            }
        }
    );
}

app.put("/comenzi",(req,res)=>{
    var id=req.query.id;
    var comenzi = readJSONFile();
    for(let i = 0;i < comenzi.length;i++)
        if(comenzi[i].id === id){
            req.body.id = id;
            comenzi[i] = req.body;
        }

    writeJSONFile(comenzi);
    res.send(comenzi);
});

app.delete("/comenzi",(req,res)=>{
    var id=req.query.id;
    var comenzi = readJSONFile();
    var newComenzi=[];
    for(let i = 0;i < comenzi.length;i++)
        if(comenzi[i].id !== id){
            newComenzi.push(comenzi[i]);
        }

    writeJSONFile(newComenzi);
    res.send(newComenzi);
});