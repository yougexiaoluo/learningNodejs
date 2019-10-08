const express = require('express')
const bodyParser = require('body-parser')
const app = express() // 实例化express对象
const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')

// 注册中间件
app.use(bodyParser.urlencoded({ extended: false })) // 解析 application/x-www-form-urlencoded
app.use(bodyParser.json())  // 解析 application/json

// 路由
app.use('/user', userRouter)
app.use('/food', foodRouter)


// 路由中间键
// app.use('/', (req, res, next) => {
//   let { token } = req.query
//   if (token) {
//     console.log('存在token')
//     next()
//   } else {
//     console.log('没有token')
//     res.send({code: 0, msg: '没有token'})
//   }
// })

// 首页
app.get('/', (req, res) => {
  res.send('<h1>首页</h1>')
})

// // 局部路由中间键
// app.get('/test', (req, res, next) => {
//   let { token } = req.query
//   if (token) {
//     console.log('存在token')
//     next()
//   } else {
//     console.log('没有token')
//     res.send({ code: 0, msg: '没有token' })
//   }
// }, (req, res) => {
//   res.send('测试路由中间键')
// })


// 监听端口
app.listen(3000, () => {
  console.log('server start!')
})
