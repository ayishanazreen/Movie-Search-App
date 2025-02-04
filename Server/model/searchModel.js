const mongoose=require('mongoose');


const movieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    poster_path: {
        type:String,
    },
    overview: {
        type: String,
    },
    
})
module.exports=mongoose.model("Movies", movieSchema)