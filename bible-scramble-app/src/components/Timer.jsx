import React from "react";

export default function Timer(props) {
    return (
        <div className="timer">
            <p className="time">:{props.time_left}</p>
        </div>
    )
}