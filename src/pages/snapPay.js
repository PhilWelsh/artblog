import React, { useState, useRef } from "react"

const SnapPayPage = () => {
  const [targetValue, setTargetValue] = useState("")
  const [value, setValue] = useState([initKeyBoard, ""])
  let textInput = useRef()
  function handleClick() {
    console.log(textInput.current.value)
    transform(textInput.current.value)
  }
  const initKeyBoard = "1234567890qwertyuiopasdfghjkl;zxcvbnm,./".split("")

  //split into rows/columns
  const chunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    )
  }

  // initKeyBoard.splice(10)
  const vFlip = input => {
    let current = chunk(input, 10)
    current.reverse()
    current = [].concat.apply([], current)
    return current
  }

  const hFlip = input => {
    let current = chunk(input, 10)
    //for each row array, reverse
    for (let i = 0; i < 4; i++) {
      current[i].reverse()
    }
    current = [].concat.apply([], current)
    return current
  }

  const shift = (input, amount) => {
    let toBeAdded = []
    if (amount > 0) {
      for (let i = 0; i < amount; i++) {
        toBeAdded.push(input[input.length - 1 - i])
      }
      // pop by amount
      for (let i = 0; i < amount; i++) {
        input.pop()
      }
      toBeAdded.reverse()
      input = toBeAdded.concat(input)
    } else if (amount < 0) {
      for (let i = 0; i < amount * -1; i++) {
        toBeAdded.push(input[i])
      }
      // shift by amount
      for (let i = 0; i < amount * -1; i++) {
        input.shift()
      }
      input = input.concat(toBeAdded)
    } else {
      return
    }
    return input
  }

  const transform = input => {
    if (input.length) {
      let splitInput = input.split(",")
      console.log(input)
      let keyboard = initKeyBoard
      splitInput.forEach(action => {
        console.log("transforming", keyboard)
        switch (action) {
          case "h":
            keyboard = hFlip(keyboard)
            break
          case "v":
            keyboard = vFlip(keyboard)
            break
          default:
            if (!isNaN(action)) {
              keyboard = shift(keyboard, action)
            }
            break
        }
      })
      setValue(keyboard)
      console.log(keyboard.join(","))
    }
  }
  return (
    <div className="App">
      <input type="text" ref={textInput}></input>
      <button onClick={handleClick}>submit</button>
      <div style={{ display: "block" }}>{value}</div>
    </div>
  )
}

export default SnapPayPage
