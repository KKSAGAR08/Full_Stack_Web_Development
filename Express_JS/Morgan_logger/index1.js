import express from "express"

var app = express();

app.use((req,res,next)=>{
    console.log("Request Method ",req.method)
    console.log("Request URL ",req.url)
    next()
})

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log(`webpage is running on http://localhost:${3000}`)
})