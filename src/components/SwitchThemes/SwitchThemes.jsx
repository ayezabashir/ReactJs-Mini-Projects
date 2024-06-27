import useLocalStorage from './useLocalStorage'
import './switchthemes.css'

const SwitchThemes = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    const handleThemeSwitch = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='dark-light-mode' data-theme={theme}>
            <div className="container">
                <p>{theme} mode</p>
                <button onClick={handleThemeSwitch}>Switch Theme</button>
            </div>
        </div>
    )
}

export default SwitchThemes
