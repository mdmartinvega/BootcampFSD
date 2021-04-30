import React from 'react'

export default function Card() {
    return (
        <div className="card w-25 m-auto">
        <img src={movie.poster_path} className="card-img-top " alt="..." />
        <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p>{movie?.release_date}</p>
            <p className="card-text">{movie.vote_average}</p>
            <a href={props.linkAttr} className="btn btn-primary">{props.otherOne}</a>
        </div>
    </div>
    )
}
