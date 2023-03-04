const express = require('express')

const { getAllFeedbacks,getOneFeedback , addFeedback , updateFeedback , deleteFeedback } = require('../controllers/feedbackController')

const router  = express.Router()

router.get('/:id',getOneFeedback)

router.route('/').get(getAllFeedbacks).post(addFeedback)

router.route('/:id').put(updateFeedback).delete(deleteFeedback)



module.exports = router