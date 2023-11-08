import React from 'react'
import './App.css'

function Moviecard({ Year,Poster, Title, Type }) {
  return (
      
          <div className="moviecard">
            <p>{Year}</p>
            <div className="image">
              <img src={Poster !== 'N/A'? Poster : 'https://via.placeholder.com/400'} alt={Title} />
            </div>
            <div className='details'>
              <span>{Type}</span>
              <span className='title'>{Title}</span>
            </div>
          </div>                 
  )
}

export default Moviecard;
