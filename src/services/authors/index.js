const router = require("express").Router()

const Model = require("../../utilis/model")

const Articles = new Model('articles')

router.get("/",async(req,res,next)=>{
    try {
        const response = await Articles.findOne()
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get("/:id",async(req,res,next)=>{
    try {
        const {rows} = await Articles.findById(req.params.id)
        res.send(rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.post("/",async (req,res,next)=>{
    try {
        const response = await Articles.save(req.body)
        res.status(201).send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

router.put("/:id",async (req,res,next)=>{
    try {
        const response = await Articles.findByIdAndUpdate(req.params.id,req.body)
        res.send(response)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})
router.delete("/:id",async (req,res,next)=>{
    try {
        const response = await Articles.findByIdAndUpdate(req.params.id)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})



module.exports = router