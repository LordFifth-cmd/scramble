import React from "react";
import { scrambleBibleBook } from "../helpers/scrambleBibleBook";
function GivenWord(props) {

    // Set Scrambled Word
    const scrambledArray = props.scrambledWord.map((letter, index) => <div key={index} className="givenword--scrambled--letter">{letter}</div>)
    const answeredArray = props.input.map(
        (letter, index) => <div
            key={index}
            className={`givenword--answered--letter ${letter !== "" ? "givenword--answered--filled" : ""}`}
        >
            {letter}
        </div>
    )

    return (
        <div className="givenword">
            <div className="givenword--scrambled">
                {scrambledArray}
            </div>
            <div className="givenword--answered">
                {answeredArray}
            </div>
        </div>
    )
}

export default GivenWord