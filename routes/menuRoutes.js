const express= require("express")
const router = express.Router()
const MenuItem = require('./../models/MenuItem')

router.post("/",async (req,res)=>{
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
         const response = await newMenuItem.save()
         console.log("Menu Item Saved Successfull");
         res.status(200).json(response)
         
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
})


router.get("/", async(req,res)=>{
    try {
        const data = await MenuItem.find()
        console.log("data fetchd successfully");
        res.status(200).json(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error "})
        
    }
})

router.get("/:taste",async(req,res)=>{
    try {
        const taste = req.params.taste;
        if(taste == "spicy" || taste == "sweet" || taste == "sour"){
            const response = await MenuItem.find({taste:taste})
            console.log("data fetched");
            res.status(200).json(response)
            
        }
        else{
          res.status(404).json({error:"Invalid taste"}) 
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
        
    }
})

module.exports = router