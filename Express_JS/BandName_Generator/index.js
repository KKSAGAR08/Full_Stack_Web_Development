import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import {fileURLToPath} from "url"


const __dirname = dirname(fileURLToPath(import.meta.url))

const port = 3000
const app = express();
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

function BandNameGenerator(req,res,next){
    console.log(req.body);
    bandName = req.body["street"]+req.body["pet"];
    next();
}

app.use(BandNameGenerator);

app.post("/submit",(req,res)=>{
    res.send(`<h1>Band Name Generated</h1><h2>${bandName}👌</h2>`)
})

app.listen(port,()=>{
    console.log(`The webpage is listing in http://localhost:${port}`);
})