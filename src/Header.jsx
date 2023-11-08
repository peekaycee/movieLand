import React from 'react'
import searchIcon from "./images/icons8-search-48.png";
import "./App.css"

function Header() {
  return (
    <div className='header--container'>
      <h1 className="header">
          Mov<span className="s1">ie</span><span className="s2">Land</span>
      </h1>
      <input 
        className="search-input"
        placeholder="search for a movie"
        // value={Superman}
        onChange={ () => {}}
      />
      <img src={searchIcon} alt="search-icon" 
        width={20}
        height={20}
        className="search-image"
        onClick={()=>{}}
      />
    </div>
  )
}

export default Header
