import React from "react";
import Navigation from "./components/Navigation"
import Timer from "./components/Timer"
import GivenWord from "./components/GivenWord";
import Keyboard from "./components/Keyboard";
import { getRandomBibleBook } from "./helpers/getRandomBibleBook"
import { scrambleBibleBook } from "./helpers/scrambleBibleBook";
import bibleBooksList from "./bible_books";
import { isEmpty } from "./helpers/isEmpty";
import StartGame from "./components/StartGame";

const randomBibleBook = getRandomBibleBook(bibleBooksList)
const givenWordScrambled = scrambleBibleBook(randomBibleBook)

export default function App() {

    const [startGame, setStartGame] = React.useState(false)
    // Set timer
    const [time, setTime] = React.useState(10)

    // Set Scrambled Word
    const initialInput = randomBibleBook["Book"].split("").map(x => "")

    // Set variable for keyboard inputs list
    const [input, setInput] = React.useState(initialInput)


    function beginGame() {
        setStartGame(!startGame)
    }

    // updates the input list
    function updateInputList(event) {
        const newEntry = event.target.innerText

        setInput(originalInput => {

            const newInput = [...originalInput]

            if (originalInput && newEntry == "<") {
                // Get last element of array that is not an empty string
                for (let i = originalInput.length - 1; i => 0; i--) {
                    if (newInput[i] !== "") {
                        newInput[i] = ""
                        return newInput
                    }
                }
            }
            else if (originalInput.indexOf("") !== -1 && newEntry !== "ENTER") {

                for (let i = 0; i <= originalInput.length; i++) {
                    if (newInput[i] == "") {
                        newInput[i] = newEntry
                        return newInput
                    }
                }
            } else {
                return newInput
            }
        })

        console.log(input)
    }

    return (
        <>
            {
                startGame
                    ?
                    <div className="app">

                        < Navigation />
                        < Timer time_left={`${time}s`} />
                        < GivenWord scrambledWord={givenWordScrambled} input={input} />
                        < Keyboard updateInput={updateInputList} scrambledWord={givenWordScrambled}/>

                    </div>
                    :
                    <div className="app">
                        < Navigation />
                        <StartGame beginGame={beginGame}/>
                    </div>
            }
        </>
    )
}