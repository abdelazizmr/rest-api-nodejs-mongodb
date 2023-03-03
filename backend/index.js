const express = require('express')

const app = express()

const PORT  = process.env.PORT || 5000

// Accepting body requests
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// Responsable for routing
app.use('/api/feedbacks',require('./routes/feedbackRouter'))

app.listen(PORT, ()=> console.log(`server running on ${PORT}`))