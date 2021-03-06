import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"

const WordHolder = ({ word }) => {
  const splitWord = word.split("") // word split into an array
  const lettersNeeded = Array.from(new Set(splitWord)) // which letters exist in the word, no duplicates
  const [lettersRemaining, setLettersRemaining] = useState([])
  // const updateState = ()=>{}
  useEffect(() => {
    setLettersRemaining(lettersNeeded)
  }, lettersNeeded.join(","))
  console.log(`lettersRemaining ${lettersRemaining}`)
  const [wordLetters, setWordLetters] = useState(splitWord)
  // setLettersRemaining(lettersNeeded)

  function removeLetterFromArray(e) {
    console.log(`removingLetter ${e}`)
    let filteredArray = lettersRemaining.filter(item => item !== e)
    setLettersRemaining([...filteredArray])
  }

  // const handleKeyDown =(e)=>{
  //     console.log(e.key)
  //     console.log(lettersRemaining)
  //     return lettersRemaining.includes(e.key) ? (console.log("!"), removeLetterFromArray(e.key)) : console.log("?")
  // }

  function keyInputs() {
    return
    // document.addEventListener('keydown', function(e){
    //     return lettersRemaining.includes(e.key) ? removeLetterFromArray(e.key) : null
    // });
  }
  keyInputs()

  //keyInputs works but is sloppy

  // useEffect(() => {
  //     document.addEventListener('keydown', handleKeyDown)
  //     return () => {
  //         document.removeEventListener('keydown', handleKeyDown);
  //     };
  // },[])

  let allLetters = splitWord.map((letter, i) => {
    // for each letter in the word
    if (!lettersRemaining.includes(letter)) {
      return (
        <div id={i} key={i} className="letterholder">
          {letter}
        </div>
      )
    } else {
      return (
        <div id={i} key={i} className="letterholder">
          _
        </div>
      )
    }
  })
  return <div className="wordholder">{allLetters}</div>
}

const LanguageGamePage = () => {
  const gameRef = useRef()
  const arrayOfWords = ["book", "spaghetti", "peanuts", "tumour", "zob"]
  const randomWord = () => {
    return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
  }
  const [newWord, setNewWord] = useState(randomWord)

  return (
    <Layout>
      <h1>Game</h1>
      <WordHolder word={newWord} />
      <button onClick={() => setNewWord(randomWord())}>new word</button>
      {/* {newWord} */}
    </Layout>
  )
}

export default LanguageGamePage
