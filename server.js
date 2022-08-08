const express = require('express')
const Mock = require('mockjs')

const app = express()

app.get("/api/users", (req, res) => {
  const userList = Mock.mock({
    'userList|10': [{
      'id|+1': 1,
      'name': '@cname',
      'email': '@email'
    }]
  })
  console.log(req.method, req.url)
  res.status(200)
  res.json(userList)
})

app.listen(3000, () => {
  console.log("服务启动: 3000")
})
