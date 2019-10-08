const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  res.send({ code: 1, data: [{ name: '商品1', price: 100, num: 10 }, { name: '商品2', price: 195, num: 2 }] })
})

module.exports = router