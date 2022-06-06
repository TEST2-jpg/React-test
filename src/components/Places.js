import React from "react";
export default function Places(props) {
    return (
    <div className="container">
        <img src={props.url} alt={props.title} />
        <div className="fig">
            <div className="title">{props.title}</div>
            <div className="location">{props.location}</div>
            <div className="age">{props.age}</div>
            <div className="description">{props.description}</div>
        </div>
    </div>

    )
}