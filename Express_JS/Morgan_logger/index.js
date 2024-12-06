import express from "express"
import morgan from "morgan"
 
var app = express()
 
app.use(morgan('tiny'))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(3000,()=>{
    console.log(`The page is running on port ${3000}`)
})