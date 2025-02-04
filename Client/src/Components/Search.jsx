import {SearchList} from './SearchList/SearchList';
import {SearchInput} from './SearchInput/SearchInput';
import './Search.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL ="https://movie-search-app-ibsz.onrender.com/api/movies"

// const API_URL="https://api.themoviedb.org/3/discover/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&sort_by=popularity.desc&page=1&include_adult=false"
export const Search = () => {
    const [inputText, setInputText] =useState("")
    const [searchList, setSearchList]=useState([]);
    const [text,setText]=useState(false);
    // const [filteredList, setFilteredList]= useState([]);  for local filter
     

    const clearSearch=()=>{
        setInputText("");
        setSearchList([]);
        setText(false);
    }

    const handleOnChange=(event)=>{
        setInputText(event.target.value);
        // fetchList(event.target.value); //call api call function in handlechange to call the api on every key press
    }


    const handleSubmit =async()=>{
      try {
        const response= await axios.get(API_URL, {
          params:{
            movieName:inputText,
          }
        })
        setSearchList(response.data);
        setText(true);
        
      } catch (error) {
        console.error(error);
        setSearchList([]);
        setText(false);
        
      }}

  return (
    <>
    <div className='search-container'>
        <div className='heading-container'>
        <img src="sea.png"></img>
        <h1>Looking for a Movie..?</h1>
        </div>
      <SearchInput inputText={inputText} handleOnChange={handleOnChange} clearSearch={clearSearch}/>
      <button onClick={handleSubmit}>Submit</button>
      {searchList && searchList.length > 0  ? (<SearchList searchList={searchList} />) : ( text && (<h1 className="no-result"> No matching movie.. Try with another keyword</h1>))}
    </div>
    </>
  )
}
