const express = require('express')

const app = express()


const PORT  = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('hello express')
})

app.listen(PORT, ()=> console.log(`server running on ${PORT}`))