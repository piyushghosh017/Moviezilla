import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing.js"
import movieapi from '../../common/apis/movieapi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


const Home=() =>{
    // const movieText="Harry";
    const dispatch = useDispatch();
    const movieTest="Harry"
    const showText="Friends"
    // api calll
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieTest));
        dispatch(fetchAsyncShows(showText))

        // const fetchMovies = async()=>{
        //     const res = await movieapi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        //     .catch((err)=>{
        //         console.log("errorrr",err);
        //     });
        //     // console.log("responseee from api",res);
        //     dispatch(addMovies(res.data));
        // }; // will fetch movies using thunk middle ware
        // fetchMovies();

    }, [dispatch])  

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
      </div>
    )
}
export default Home;