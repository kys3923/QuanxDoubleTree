const express = require('express')
const router = express.Router()

const { register } = require('../controllers/reservation')

router.route('/register').post(register)

module.exports = router