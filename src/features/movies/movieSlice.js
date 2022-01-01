import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import movieapi from '../../common/apis/movieapi';
import { APIKey } from '../../common/apis/MovieApiKey';

// / convert syn to async using thunk middleware
// fetch all movies her instead of fetching in HOME.JS
// we dont want to fetch in component and then dispatch 
export const fetchAsyncMovies =createAsyncThunk('movies/fetchAsyncMovies',
async (term)=>{
    // const movieText="Harry";
        const res = await movieapi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
        .catch((err)=>{
            console.log("errorrr",err);
        });
        // console.log("responseee from api",res);
       return res.data ;
    
});

export const fetchAsyncShows =createAsyncThunk('movies/fetchAsyncShows',
async (term)=>{
    // const seriesText="Friends";
        const res = await movieapi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
        .catch((err)=>{
            console.log("errorrr",err);
        });
        // console.log("responseee from api",res);
       return res.data ;
    
});

export const fetchAsyncMovieOrShowDetail =createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',
async (id)=>{
        const res = await movieapi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        // console.log("responseee from api",res);
       return res.data ;
    
});


const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
}
const movieSlice=createSlice({
    name:"movies",
    initialState,
    // actions creator
    reducers:{
        // addMovies:(state,{payload})=>{
        //     state.movies=payload;
        // }, // this is part of fectmovie ---
        removeSelecetedMovieOrShow:(state)=>{
            state.selectedMovieOrShow={}
        }
    },
    // extra reducer -- for thunk
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
          console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully!");
          return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
          console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
          },
          [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectedMovieOrShow: payload };
          },
    }
});

export const {addMovies,removeSelecetedMovieOrShow}=movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies; // 1st movies is name of slice 2nd one is initialState
export const getAllShows = (state)=>state.movies.shows;
export const getSelectedMovieOrShow = (state)=>state.movies.selectedMovieOrShow;


export default movieSlice.reducer;
