const router = require("express").Router()

const Model = require("../../utilis/model")

const Author = new Model('authors')


router.get("/",async(req,res,next)=>{
    try {
        const response = await Author.findOne()
        res.send(response)
    } catch (error) {
       next(error)
    }
})

router.get("/:id",async(req,res,next)=>{
    try {
        const {rows} = await Author.findById(req.params.id)
        res.send(rows)
    } catch (error) {
        next(error)
    }
})

router.post("/",async (req,res,next)=>{
    try {
        const response = await Author.save(req.body)
        res.status(201).send(response)
    } catch (error) {
       next(error)
    }
})

router.put("/:id",async (req,res,next)=>{
    try {
        const response = await Author.findByIdAndUpdate(req.params.id,req.body)
        res.send(response)
        
    } catch (error) {
        next(error)
    }
})
router.delete("/:id",async (req,res,next)=>{
    try {
        const response = await Author.findByIdAndUpdate(req.params.id)
        res.send(response)
    } catch (error) {
        next(error)
    }
})



module.exports = router