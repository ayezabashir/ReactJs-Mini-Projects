import { useState } from "react"
import './switchthemes.css'

const SwitchThemes = () => {
    const [mode, setMode] = useState('light')
    const handleModes = () => {
        mode === 'light' ? setMode('dark') : setMode('light')
    }
    return (
        <div className={mode === 'light' ? 'container' : 'container dark'} >
            <h1>{mode} mode</h1>
            <button className="modesBtn" onClick={handleModes}>Switch Modes</button>
        </div>
    )
}

export default SwitchThemes
