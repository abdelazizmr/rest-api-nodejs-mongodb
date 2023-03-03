const express = require('express')

const { getAllFeedbacks, addFeedback , updateFeedback , deleteFeedback } = require('../controllers/feedbackController')

const router  = express.Router()

router.route('/').get(getAllFeedbacks).post(addFeedback)

router.route('/:id').put(updateFeedback).delete(deleteFeedback)



module.exports = router