const asyncHandler = require('express-async-handler')

// Feedback model
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

// ================================ COMMENTS ================================


//@ desc   => Get a list of comments for a given feedback id
//@ method => GET api/feedbacks/:id/comments
const getCommentsForFeedback = asyncHandler(async (req,res) =>{
    const id = req.params.id
    const f = await feedback.findById(id)
    if (!f){
        res.status(400)
        throw new Error('Requested feedback id does not exist!')
    }
    //console.log(f.comments)
    res.json(f.comments)
})


//@ desc   => Add a comment for a given feedback id
//@ method => POST api/feedbacks/:id/

const addCommentForFeedback = asyncHandler(async (req,res) =>{

    const id = req.params.id
    const f = await feedback.findById(id)
    if (!f){
        res.status(400)
        throw new Error('Requested feedback id does not exist!')
    }


   const payload = req.body
    const content = payload.content
    if (!content){
        res.status(400)
        throw new Error('Content is required for a comment !') 
    }

    const createdComment = await feedback.comments.create({
        content: payload.content,
    })

    res.json(createdComment)
    
})



module.exports = {
    getAllFeedbacks,
    getOneFeedback,
    addFeedback,
    updateFeedback,
    deleteFeedback,
    // comments
    getCommentsForFeedback,
    addCommentForFeedback,

}