const express=require("express");
const app=express();
const PORT=3005;
const movies=require("./movies.json");
const cors=require("cors");

// const userList=[
//     {name:"Ayisha"},
//     {name:"Nazreen"},
//     {name:"Shijil"},
//     {name:"Aizen"},
// ]
app.use(express.json());
app.use(cors());
app.listen(PORT, ()=>{
    console.log(`Server is started ${PORT}`);
});

app.get("/api/movies", (req,res)=>{
    let filteredMovies=[]
    // console.log(req.query);
    const {movieName}=req.query;
    if(movieName)
    {
    filteredMovies= movies.filter((movie) => movie.title.toLowerCase().includes(movieName.toLowerCase()));
    }
    else
    {
        filteredMovies=movies;
    }
    res.json(filteredMovies);
});


app.post("/api/movies", (req,res)=>{
    const {movieName}=req.body;
    movies.push({
        id:Date.now(),
        title:movieName,
        poster_path:"",
    })
    res.json(movies);
 });