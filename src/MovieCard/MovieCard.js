import React from 'react';
// import { moviesData } from '../MoviesData';

import Rate from '../Rate';

import './MovieCard.css';

const MovieCard = ({movies}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img  src={movies.image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{movies.name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{movies.date}</li>
            <li>||</li>
            <li>{movies.type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={movies.rating} />
        </div>
        <div className="card_right__review">
          <p>{movies.description}</p>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div className="card_right__button">
          <a href="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;