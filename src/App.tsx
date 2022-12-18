import {useState} from 'react'
import words from './wordList.json'

const App = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])


  console.log(wordToGuess)
  return <div>App</div>
}
export default App
