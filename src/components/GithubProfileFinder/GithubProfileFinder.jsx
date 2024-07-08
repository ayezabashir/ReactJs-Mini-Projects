import { useState } from "react";
import "./styles.css";
const GithubProfileFinder = () => {
    const [inputValue, setInputValue] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        fetchGithubProfiles(inputValue)
    };

    async function fetchGithubProfiles(username) {
        setLoading(true);
        const reponse = await fetch(`https://api.github.com/users/${username}`);
        const data = await reponse.json()
        if (data) {
            setUserData(data);
            setLoading(false)
        }
    }
    return (
        <div className="container">
            <p style={{ textAlign: 'center' }}>
                {loading ? 'Loading...' : null}
            </p>
            <div className="input-container">
                <input
                    type="text"
                    name="search-by-username"
                    placeholder="Search Username..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    );
};

export default GithubProfileFinder;
