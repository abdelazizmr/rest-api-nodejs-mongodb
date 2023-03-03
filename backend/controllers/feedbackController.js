const asyncHandler = require('express-async-handler')

//@ desc   => Get All Feedbacks 
//@ method => GET api/feedbacks
const getAllFeedbacks = asyncHandler(async (req,res) =>{
    return res.json({messgae : 'all feedbacks'})
})

//@ desc   => Add new feedback 
//@ method => POST  api/feedbacks
const addFeedback = asyncHandler(async (req,res) =>{
    const payload = req.body.text
    console.log(payload)
    if (!payload){
        res.status(400).json({message : 'Payload is required for post method'})
        return 
    }
    res.json({message : 'succceess'})
})

//@ desc   => Update a feedback for a given id 
//@ method => PUT  api/feedbacks/:id
const updateFeedback = asyncHandler(async (req,res) =>{
    return res.json({messgae : 'update feedback'})
})

//@ desc   => Delete a feedback for a given id 
//@ method => GET  api/feedbacks/:id
const deleteFeedback = asyncHandler(async (req,res) =>{
    return res.json({messgae : 'delete feedback'})
})



module.exports = {
    getAllFeedbacks,
    addFeedback,
    updateFeedback,
    deleteFeedback
}