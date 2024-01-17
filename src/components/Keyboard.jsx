import React from "react"

export default function Keyboard(props) {


    // Set letters
    const firstRowObjects = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(
        (element) => {
            return {
                "switch" : props.scrambledWord.includes(element),
                "letter" : element
            }
        }
    )

    const firstRow = firstRowObjects.map(
        letterObject => <div
        key={letterObject.letter}
        className={`${letterObject.letter} keyboard--letter switch--${letterObject.switch}`}
        onClick={
            (event) => props.updateInput(event)
        }
    >
        {letterObject.letter}
    </div>
    )

    const secondRowObjects = ["A", "S", "D", "F", "G", "H", "J", "K", "L"].map(
        (element) => {
            return {
                "switch" : props.scrambledWord.includes(element),
                "letter" : element
            }
        }
    )
    const secondRow = secondRowObjects.map(
        letterObject => <div
        key={letterObject.letter}
        className={`${letterObject.letter} keyboard--letter switch--${letterObject.switch}`}
        onClick={
            (event) => props.updateInput(event)
        }
    >
        {letterObject.letter}
    </div>
    )


    const thirdRowObjects = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "<"].map(
        (element) => {
            return {
                "switch" : element == "ENTER" || element == "<" ? true : props.scrambledWord.includes(element),
                "letter" : element
            }
        }
    )

    const thirdRow = thirdRowObjects.map(
        letterObject => <div
        key={letterObject.letter}
        className={`${letterObject.letter} keyboard--letter switch--${letterObject.switch}`}
        onClick={
            (event) => props.updateInput(event)
        }
    >
        {letterObject.letter}
    </div>
    )


    return (
        <div className="keyboard">
            <div className="keyboard--firstrow">
                {...firstRow}
            </div>
            <div className="keyboard--secondrow">
                {...secondRow}
            </div>
            <div className="keyboard--thirdrow">
                {...thirdRow}
            </div>
        </div>
    )
}