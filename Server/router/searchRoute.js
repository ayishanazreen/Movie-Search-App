const express=require('express');
const router=express.Router();
const Movies=require('../model/searchModel');
const movies=require('../movies.json')

const populateDb = async()=>{
    try {
        const existingMovies= await Movies.find();
        if(existingMovies.length ===0){
         const insertMovies=await Movies.insertMany(movies);
         console.log("Database Populated", insertMovies); 
        }
        
    } catch (error) {
        console.error("Error populating database:", error);    
    }       
}


populateDb();

router.get("/", async(req,res)=>{
    try {
        const {movieName}=req.query;
        let filteredMovies;
        if(movieName){
           filteredMovies=await Movies.find({title: {$regex: movieName, $options: "i"}});  
           console.log(filteredMovies)
       } 
       else{
         filteredMovies=await Movies.find().limit(10);
         console.log(filteredMovies)
       }   

        if (filteredMovies.length === 0) {
        return res.status(404).json({ message: "No movies found." });
      }
       res.json(filteredMovies)
}
    catch (error)
    {
        console.log(error);
        res.status(500).json({ message: "Internal server error." });
    }

});




    // let filteredMovies=[]
    // // console.log(req.query);
    // const {movieName}=req.query;
    // if(movieName)
    // {
    
    // filteredMovies= movies.filter((movie) => movie.title.toLowerCase().includes(movieName.toLowerCase()));
    // }
    // else
    // {
    //     filteredMovies=movies;
    // }
    // res.json(filteredMovies);

 module.exports=router;