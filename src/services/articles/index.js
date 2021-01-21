const router = require("express").Router()
const db = require("../../utilis/db")
const Model = require("../../utilis/model")

const Articles = new Model('articles')

router.get("/",async(req,res,next)=>{
    try {
        const {rows} = await Articles.findOne(req.query)
        res.send(rows)
    } catch (error) {
        
       next(error)
    }
})

router.get("/:id",async(req,res,next)=>{
    try {
        const {rows} = await Articles.findById(req.params.id)
        res.send(rows)
    } catch (error) {
       next(error)
    }
})

router.post("/",async (req,res,next)=>{
    try {
        const response = await Articles.save(req.body)
        res.status(201).send(response)
    } catch (error) {
        next(error)
    }
})

router.put("/:id",async (req,res,next)=>{
    try {
        const response = await Articles.findByIdAndUpdate(req.params.id,req.body)
        res.send(response)
        
    } catch (error) {
       next(error)
    }
})
router.delete("/:id",async (req,res,next)=>{
    try {
        const response = await Articles.findByIdAndUpdate(req.params.id)
        res.send(response)
    } catch (error) {
       next(error)
    }
})
router.get("/articles-authors-category", async (req, res, next) => {
    try {
      
      const query = `SELECT a.head_line AS article_headline , ath.name AS author_name ,ath.lastname AS author_lastName,c.category_name AS category_name

      FROM articles AS a INNER JOIN authors AS ath ON a.author_id = ath.id INNER JOIN categories AS c ON a.category_id=c.id`;
      const { rows } = await db.query(query);
      res.status(200).send(rows);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  router.get("/dont-like-this/way",async(req,res,next)=>{
      try {
          
        const entries = Object.entries(req.query)
        console.log("--11---",entries)
        const whereClause = `${entries.map(([column,value])=>`${column}='${value}'`).join(" OR ")}`
        const query = `SELECT * FROM articles WHERE ${whereClause}`
        console.log("--11---",query)
          const {rows} = await db.query(query)
          res.status(200).send(rows);
      } catch (error) {
          next(error)
      }
  })


module.exports = router