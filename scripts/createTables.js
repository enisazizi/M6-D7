require("dotenv").config()

const fs = require("fs")
const path = require("path")

const db = require("../src/utilis/db")
const {promisify} = require("util")

const read = promisify(fs.readFile)

const createTable = async ()=>{
    try {
        const dataPath = path.join(__dirname,`../data/all.sql`)
        const data = await read(dataPath)
        const slqQueryString = data.toString()
        await db.query(slqQueryString)
        console.info(`All Tables are created`)
    } catch (error) {
        console.error(`tables are not created`)
        console.error(error)
    }
    db.pool.end()
}

createTable()