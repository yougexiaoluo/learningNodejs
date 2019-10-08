const express = require('express')
const app = express()
const path = require('path')

// 静态资源根目录
app.use(express.static(path.resolve(__dirname, './public')))

app.listen(3000, () => {
  console.log('server start')
})