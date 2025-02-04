import {useEffect, useRef} from 'react'
import './SearchInput.css';

export const SearchInput = ( {inputText, handleOnChange, clearSearch}) => {
  const inputRef=useRef();

  useEffect(()=>{
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div className='search-input-container'>
       <input type='text' placeholder='search here...' onChange={handleOnChange} value={inputText} ref={inputRef}/>
       {inputText && <button onClick={clearSearch}><img  src="/close.png"  width="40px" height="30px" style={{objectFit:"contain"}} className='close-img'></img>
       </button>}
       </div>
    </>
  )
}

