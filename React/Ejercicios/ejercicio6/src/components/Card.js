// import {Fragment} from 'react'

export default function Card(props) {
    return (
    
        <div className="card w-25 m-auto">
            <img src={props.src} className="card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.textAttr}</p>
                <a href={props.linkAttr} className="btn btn-primary">{props.otherOne}</a>
            </div>
        </div>
    
    )
}

