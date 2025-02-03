import {SearchList} from './SearchList/SearchList';
import {SearchInput} from './SearchInput/SearchInput';
import './Search.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL ="http://localhost:3005/api/movies";
export const Search = () => {
    const [inputText, setInputText] =useState("")
    const [searchList, setSearchList]=useState([]);
    // const [filteredList, setFilteredList]= useState([]);  for local filter
     

    const clearSearch=()=>{
        setInputText("");
        setSearchList([]);
    }

    const handleOnChange=(event)=>{
        setInputText(event.target.value);
        // fetchList(event.target.value); //call api call function in handlechange to call the api on every key press
    }


    const handleSubmit =async()=>{
      try {
        const response= await axios(API_URL, {
          method:"POST",
          data:{
            movieName:inputText,
          }
        })
        setSearchList(response.data);
        
      } catch (error) {
        console.error(error);
        
      }}

    

    const fetchList = async()=>{
      try {
        const response= await axios(API_URL,
          {
            params:{
                movieName:inputText,
            }}); 
            console.log(response);
            setSearchList(response.data); 
      } 
      catch (error) 
      {
        console.error(error);  
      }
    }
    useEffect(()=>{
        const Timeout=setTimeout(()=>{
        if(inputText)
            fetchList();  
        }, 2000);
       
        return()=>{
            clearTimeout(Timeout);
        }
    }, [inputText]);

  return (
    <>
    <div className='search-container'>
        <div className='heading-container'>
        <img src="sea.png"></img>
        <h1>Looking for a Movie..?</h1>
        </div>
      <SearchInput inputText={inputText} handleOnChange={handleOnChange} clearSearch={clearSearch}/>
      <button onClick={handleSubmit}>Submit</button>
      <SearchList searchList={searchList}  />
    </div>
    </>
  )
}
