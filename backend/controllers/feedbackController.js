const asyncHandler = require('express-async-handler')
const feedback = require('../models/feedbackModel')

//@ desc   => Get All Feedbacks 
//@ method => GET api/feedbacks
const getAllFeedbacks = asyncHandler(async (req,res) =>{
    const feedbacks = await feedback.find({})
    return res.json(feedbacks)
})




//@ desc   => Get a specific Feedback
//@ method => GET api/feedbacks/:id
const getOneFeedback = asyncHandler(async (req,res) =>{
    const id = req.params.id
    const f = await feedback.findById(id)
    if (!f){
        res.status(400)
        throw new Error('Requested feedback id does not exist!')
    }

    res.json(f)
})





//@ desc   => Add new feedback 
//@ method => POST  api/feedbacks
const addFeedback = asyncHandler(async (req,res) =>{
    const payload = req.body
    const title = payload.title
    if (!title){
        res.status(400)
        throw new Error('Title is required !') 
    }
    const createdFeedback = await feedback.create({
        title: payload.title,
        category: payload.category,
        description: payload.description,
    })
    res.json(createdFeedback)
})





//@ desc   => Update a feedback for a given id 
//@ method => PUT  api/feedbacks/:id
const updateFeedback = asyncHandler(async (req,res) =>{
    const id = req.params.id
    const f = await feedback.findById(id)
    if (!f){
        res.status(400)
        throw new Error('Requested feedback id does not exist!')
    }

    const updatedFeedback = await feedback.findOneAndUpdate(id , req.body , { new : true } )

    res.json(updatedFeedback)

})







//@ desc   => Delete a feedback for a given id 
//@ method => GET  api/feedbacks/:id
const deleteFeedback = asyncHandler(async (req,res) =>{
    const id = req.params.id
    const f = await feedback.findById(id)
    if (!f){
        res.status(400)
        throw new Error('Requested feedback id does not exist!')
    }

    await feedback.remove()

    res.json({id : id})
})



module.exports = {
    getAllFeedbacks,
    addFeedback,
    updateFeedback,
    deleteFeedback,
    getOneFeedback
}