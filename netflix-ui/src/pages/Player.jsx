import React, { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const Player = () => {

    const [moviedet, setMoviedet] = useState([]);
    const { id } = useParams()

    const APIKEY = ""
    const fetchMovie = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
        );
        const moviedetail = await data.json();
        setMoviedet(moviedetail);
    };

      useEffect(() => {
        fetchMovie()
 
      }, []);
      
    
    document.title = `BlueBird Movies | ${moviedet.title}`

    return (
      <>
      
        <iframe allowFullScreen style={{ display: 'flex', alignItems:"center", justifyContent:"center", width:"100%", height:"100vh"}} src={`https://embed.smashystream.com/playere.php?tmdb=${id}`}></iframe>
      </>
    )
}

export default Player
