const express=require("express");
const mongoose=require('mongoose');
const app=express();
const movies=require("./movies.json");
const cors=require("cors");
require('dotenv').config();
const connectDb=require('./config/db');
const searchRoute=require('./router/searchRoute')

// const userList=[
//     {name:"Ayisha"},
//     {name:"Nazreen"},
//     {name:"Shijil"},
//     {name:"Aizen"},
// ]
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, ()=>{
    console.log(`Server is started ${process.env.PORT}`);
});
connectDb();

app.use('/api/movies', searchRoute);