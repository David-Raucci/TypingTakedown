import React, {useState, useEffect} from 'react'

const Mainbox = () => {

    const [text, setText] = useState('')
    const [timer, setTimer] = useState(10)
    const [isCounting, setIsCounting] = useState(false)
    const [score, setScore] = useState()

    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }

    const handleWordCount = (text) => {
        const inputSplit = text.trim().split(' ')
        console.log(inputSplit.length)
        return inputSplit.length
    }

    useEffect(() => {
        if (timer > 0 && isCounting) {
            setTimeout(() => {
                setTimer(time => time - 1)
            }, 1000)
        } else {
            setIsCounting(false)
            setScore(handleWordCount(text))
        }
    }, [timer, isCounting])
    

        return(
      <div className='main-box'>
        <div className='type-box'>
            <textarea 
                onChange={handleChange}
                value={text}
                onFocus={() => setText('')}
            />
        </div>
        <button onClick={() => setIsCounting(true)} id='start-button'>Start</button>
        <div className='number-box'>
            <div className='time-box'>
                <p id='time'>{timer}</p>
            </div>
            <div className='score-box'>
                <p id='score'>{score}</p>
            </div>
        </div>
      </div>
    )
}

export default Mainbox