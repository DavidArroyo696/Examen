const express = require('express')

const controller = require('../Controllers/user')

const router = express.Router()

const path = 'user'

router.get(
    `/${path}`,
    controller.getData
)

router.post(
    `/user`,
    controller.insertData
)

router.put(
    `/:id`,
    controller.updateSingles
)

router.delete(
    `/:id`,
    controller.deleteSingles
)

module.exports = router