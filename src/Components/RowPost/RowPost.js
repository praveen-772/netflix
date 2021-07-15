import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constants/constants'
import { originals, action } from '../../urls'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [UrlId, setUrlId] = useState("")

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
        })
    }, [])
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }
    const handleMovieId = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }
            else {
                console.log("Array Details Empty");
            }
        })
    }

    return (
        <div className="row">
            <h2 className="title">{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={() => handleMovieId(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} src={`${imageUrl + obj.backdrop_path}`} alt="Posters" />
                )}
            </div>
            {UrlId && <Youtube opts={opts} videoId={UrlId.key} />}
        </div>
    )
}

export default RowPost
