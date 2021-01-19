const db = require("../db")

class Model {
    constructor(name){
        this.name = name
    }

    async run(query){
        try {
            const response = await db.query(query)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
    async findById(id){
        if(!id){
            throw new Error('Something happend with the ID')
        }
        const query = `SELECT * FROM${this.name} where id= ${parseInt(id,10)}` 
        const response = await this.run(query)
        return response
    }
    async findByIdAndDelete(id){
        if(!id){
            throw new Error('Something happend with the ID')
        }
        const query = `DELETE FROM ${this.name} WHERE id=${id}`
        const response = await this.run(query)
        return response
    }
    async findByIdAndUpdate(id){
        if(!id){
            throw new Error('ID look what are you sending')
        }
        const entries = Object.entries(fields)

        const query = `UPDATE ${this.name} SET ${entries.map(([column,value])=>`${column}='${value}'`).join(",")} WHERE id=${parseInt(id)}`
        const response = await this.run(query)
        return response
    }
    async findOne(fields){
        if(!fields || Object.values(fields).length===0){
            const query = `SELECT * FROM ${this.name}`
            const response = await this.run(query)
            return response

        }else{
            const entries = Object.entries(fields)
            const whereClause = `${entries.map(([column,value])=>`${column}='${value}'`).join(" AND ")}`
            const query = `SELECT * FROM ${this.name} WHERE ${whereClause}`
            const response = await this.run(query)
            return response
        }
    }
    async save(fields){
        if(!fields || Object.values(fields).length===0){
            throw new Error ("somethings happend with the values ")
        }else{
            const columns = Object.keys(fields)
            const values = Object.values(fields)
            const query = `INSERT INTO ${this.name} (${columns.join(",")}) VALUES (${values.map(v=>`'${v}'`).join(",")})`
            const response = await this.run(query)
            return response
        }
    }
}

module.exports = Model

