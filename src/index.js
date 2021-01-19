const express = require("express")

const server = express()

const cors = require("cors")

const services = require("./services")

server.use(express.json())



server.use("/api",services)

server.use(cors())

const port = process.env.PORT || 4000

server.listen(port,()=>{
    console.info(' ✅  Server is running on port ' + port )
})

server.on("error",(error)=>{
    console.log(' ❌ Error : server is not running :  ' + error)
})