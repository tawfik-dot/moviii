import React  from 'react';
// import {useState } from 'react';


import Rate from '../Rate';

import './SearchMovie.css';


const SearchMovie = ({setNameSearch,nameSearch,rateSearch,setRatesSearch}) => {


//   const [text,setText]=useState("")
  return (
    <div>
      <div className="search-container">

      <input
      type="text"
      placeholder="name of movie ?"
      value={nameSearch}
      onChange={e=>setNameSearch(e.target.value)}
      />
      {/* <button onClick={()=>setNameSearch(text)} >Search</button> */}
     
        <div className="rating-search">
<Rate rating={rateSearch}  setRatesSearch={setRatesSearch} />
         
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;