import { useState } from 'react'
import './randomcolour.css'
const RandomColour = () => {
    const [colour, setColour] = useState('#ffffff')

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

    const randomValue = (length) => {
        return Math.floor(Math.random() * length)
    }

    const generateRandomColour = () => {
        let hex = '#';
        for (let i = 0; i <= 5; i++) {
            hex += arr[randomValue(arr.length)]
        }
        setColour(hex)
        console.log(hex)
    }
    return (
        <div className='colour-container' style={{ backgroundColor: colour }}>
            <button onClick={() => { generateRandomColour() }}>
                Generate Random Colour
            </button>
        </div>
    )
}

export default RandomColour
