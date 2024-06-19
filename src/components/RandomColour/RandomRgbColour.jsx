import { useState } from 'react'
import './randomcolour.css'

const RandomRgbColour = () => {
    const [colour, setColour] = useState('rgb(256,256,256');

    const randomValue = (length) => {
        return Math.floor(Math.random() * length);
    }

    const generateRandomRgbColour = () => {
        let r = randomValue(256)
        let g = randomValue(256)
        let b = randomValue(256)
        console.log(`rgb(${r},${g},${b})`)
        setColour(`rgb(${r},${g},${b})`)
    }

    return (
        <div className='colour-container' style={{ backgroundColor: colour }}>
            <button onClick={() => { generateRandomRgbColour() }}>
                Generate Random Rgb Colour
            </button>
        </div>
    )
}

export default RandomRgbColour
