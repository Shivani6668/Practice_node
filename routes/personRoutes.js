const express = require('express')
const router = express.Router()
const Person = require('../models/Person')


router.post("/",async(req,res)=>{
    try {
        const data = req.body
        const newPerson = new Person(data)
        const response = await newPerson.save()
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'})
        }
})

router.get("/",async(req,res)=>{
try {
    const data = await Person.find()
    console.log('Data Fetched');
    res.status(200).json(data)
 
} catch (error) {
console.log(error);
res.status(500).json({error:"Internal Server error"})
    
}
})



router.get("/:workType",async(req,res)=>{
    try {
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType =='waiter' ){
            const response = await Person.find({work:workType})
            console.log('response fetched');
            res.status(200).json(response)
          
        }
        else{
            res.status(404).json({error:"Invalid work type"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server error'})
        
    }
})


router.put("/:id",async(req,res)=>{
    try {
        const personId = req.params.id;
           console.log(personId);
           
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:"Person not found"})
        }  
        console.log("data updated");
        res.status(200).json(response)
            
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
        
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error:"Person not found"})
        }
        console.log("Data Deleted");
        res.status(200).json({error:"Person Deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
        
    }
})

module.exports = router