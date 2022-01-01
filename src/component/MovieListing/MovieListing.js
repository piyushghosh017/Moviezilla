import React from 'react'
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss"
import Slider from "react-slick";
import { settings } from '../../common/setting';
 const MovieListing=()=> {
    



    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    // console.log(movies);
    let renderMovies="";
    let renderShows="";

    renderMovies = movies.Response === 'True' ? (
            movies.Search.map((movie,index)=>{
                return(
                    <MovieCard key={index}
                data={movie} />
                )
            })
    ) : (
        <div className='movie-error'><h3>{movies.Error}</h3></div>
    );

    // /
    renderShows = shows.Response === 'True' ? (
        shows.Search.map((movie,index)=>{
            return(
                <MovieCard key={index}
            data={movie} />
            )
        })
) : (
    <div className='movie-error'><h3>{shows.Error}</h3></div>
);
console.log(renderShows);

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h1 style={{ color: '#B39500' }}>Movie</h1>
                <div className='movie-container'>
                   <Slider {...settings}>{renderMovies}</Slider> 
                    </div>
            </div>
            <div className='show-list'>
                <h1 style={{ color: '#B39500' }}>shows</h1>
                <div className='movie-container'>
                    <Slider {...settings}>{renderShows}</Slider>
                    </div>
            </div>
      </div>
      
    );
};
export default MovieListing;