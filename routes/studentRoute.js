const express = require('express')

const router = express.Router()
const {getAllStudents, createNewStudent, getAStudent, updatedStudent, deletedStudent} = require('../controllers/studentController')

router.route('/students').get(getAllStudents).post(createNewStudent)
router.route('/students/:id').get(getAStudent).put(updatedStudent).delete(deletedStudent)















module.exports = router