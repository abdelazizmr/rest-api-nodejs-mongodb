const express = require('express')

const { 
    getAllFeedbacks,
    getOneFeedback ,
    addFeedback ,
    updateFeedback ,
    deleteFeedback,
    // comments 
    getCommentsForFeedback,
    addCommentForFeedback,
    } = require('../controllers/feedbackController')

const router  = express.Router()

// Returns a feedback for a given id
router.get('/:id',getOneFeedback)


// Adds a comments for a given feedback id
router.post('/:id',addCommentForFeedback)

// Returns comments for a given feedback id
router.get('/:id/comments',getCommentsForFeedback)



// Returns all feedbacks  ||  Add feedback
router.route('/').get(getAllFeedbacks).post(addFeedback)

// Update a feedback || delete a feedback for a given id
router.route('/:id').put(updateFeedback).delete(deleteFeedback)




module.exports = router