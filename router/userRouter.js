const express = require('express')
const router = express.Router()

// 登录
router.post('/login', (req, res) => {
  res.send('login page')
})

// 注册
router.post('/register', (req, res) => {
  console.log(req.body)
  res.send({ code: 1, msg: 'ok' })
})

// 向外暴露接口
module.exports = router