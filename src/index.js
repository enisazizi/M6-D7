const express = require("express")

const server = express()

const cors = require("cors")

const services = require("./services")





server.use("/api",services)
const {
    notFoundErrorHandler,
    unauthorizedErrorHandler,
    forbiddenErrorHandler,
    badRequestErrorHandler,
    catchAllErrorHandler,
  } = require("../errorHandlers")


  const port = process.env.PORT || 4000


server.use(express.json())
server.use(cors())

server.use(notFoundErrorHandler)
server.use(unauthorizedErrorHandler)
server.use(forbiddenErrorHandler)
server.use(badRequestErrorHandler)
server.use(catchAllErrorHandler)


server.listen(port,()=>{
    console.info(' ✅  Server is running on port ' + port )
})

server.on("error",(error)=>{
    console.log(' ❌ Error : server is not running :  ' + error)
})