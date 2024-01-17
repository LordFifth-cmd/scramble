import React from "react"

export default function StartGame(props) {
    return(
        <div className="startgame">
            <h2 className="startgame--motivator"> Get ready to test your biblical brilliance and unscramble the sacred!</h2>
            <button className="startgame--button" onClick={props.beginGame}> START GAME</button>
        </div>
    )
}