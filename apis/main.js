const express = require('express')
const app = express()
const fs = require("fs")
const port = 4000

app.get('/', (req, res) => res.send('Hello World!')) 
app.get('/user/getall', (req, res) => {
  try{    
  fs.readFile("Users/user.json","utf-8",(err,data)=>{
      console.log(data);
      res.end(data);

  })
}catch(err){
  res.end("404 Error");
}
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 