// 导入 express
const express = require('express')
// 创建服务器实例
const app = express()

// 导入并配置 cors 中间件
const cors = require('cors')
app.use(cors())

// 配置解析 json 编码数据
app.use(express.json())
// 配置解析表单数据的中间件：只能解析 application/x-www-form-urlencoded 格式的数据
app.use(express.urlencoded({ extended: false }))

// 在路由前配置解析 token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')
// 声明：为增强前后台接口通用性，设置所有接口都不用携带token
app.use(expressJWT({secret: config.jwtSecretKey}).unless({path: [/^\/api/, /^\/uploads/, /^\/web/]}))

// 托管静态资源
app.use('/uploads', express.static('uploads'))
app.use('/web', express.static('dist'))


// 导入并注册管理员登录路由模块
const adminRouter = require('./router/admin')
app.use('/api', adminRouter)
// 导入并注册用户信息处理路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)
// 导入藏品数据处理路由模块
const collectionRouter = require('./router/collection')
app.use('/api', collectionRouter)
// 导入公告路由模块
const announcementRouter = require('./router/announcement')
app.use('/api', announcementRouter)


// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 捕获身份认证失败的错误
  if (err.name === 'UnauthorizedError') return res.send({status: 1, message: '1身份认证失败'})
  // 未知错误
  res.send({status: 1, message: err.message})
})

// // 启动服务器
// app.listen(8090, () => {
//   console.log('api server runing at http://127.0.0.1:8090')
// })

// 生产环境
const https = require('https')
const fs = require('fs')
const privateKey = fs.readFileSync('/var/ssl/mc.mcitem.com.key', 'utf8')
const certificate = fs.readFileSync('/var/ssl/mc.mcitem.com.pem', 'utf8')
const httpsServer = https.createServer({key: privateKey, cert: certificate}, app)
httpsServer.listen(443,'0.0.0.0', () => {
  console.log('RUN')
})

const http = require('http')
const httpapp = express()
httpapp.all('*', (req, res) => {
  res.redirect(301, `https://${req.headers.host}${req.url}`);
});
const httpServer = http.createServer(httpapp)
httpServer.listen(80,'0.0.0.0', () => {
  console.log('RUN 301 http')
})

