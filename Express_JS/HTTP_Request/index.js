import express from "express"
const App = express()
const port = 3000;

App.get("/",(req,res)=>{
 res.send("<h1>Hello world</h1>")   
})

App.post("/register",(req,res)=>{
    res.sendStatus(201);
})

App.put("/user/sagar",(req,res)=>{
    res.sendStatus(200);
})

App.patch("/user/sagar",(req,res)=>{
    res.sendStatus(200);
})

App.delete("/user/sagar",(req,res)=>{
    res.sendStatus(200);
})



App.listen(port,()=>{
    console.log("Server is running")
})



