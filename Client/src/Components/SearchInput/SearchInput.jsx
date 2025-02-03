
import './SearchInput.css';

export const SearchInput = ( {inputText, handleOnChange, clearSearch}) => {
  return (
    <>
      <div className='search-input-container'>
       <input type='text' placeholder='search here...' onChange={handleOnChange} value={inputText}/>
       {inputText && <button onClick={clearSearch}><img  src="close.png"  width="40px" height="30px" style={{objectFit:"contain"}} className='close-img'></img>
       </button>}
       </div>
    </>
  )
}

