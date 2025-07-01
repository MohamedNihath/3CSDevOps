const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send("Welcome to ShopEasy from TM World");

})

const server=app.listen(PORT,()=>{
    console.log(`Server is Runnig on Port ${PORT}`)
})

module.exports={app,server}