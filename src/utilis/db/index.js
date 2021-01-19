
const {Pool} = require("pg")


const pool = new Pool()

module.exports = {
    async query(text){
        const start = Date.now()
        const res = await pool.query(text)
        const duration = Date.now() - start
        console.info("query executed in",duration,"ms")
        return res
    },
    pool,
}