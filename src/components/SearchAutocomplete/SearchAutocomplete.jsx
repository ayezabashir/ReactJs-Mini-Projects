import { useState } from "react";
import "./searchautocomplete.css";
import User from "./User";

const SearchAutocomplete = () => {
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers(username) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${username}`
      );
      const data = await response.json();
      if (data) {
        console.log(data.users);
        setUserData(data.users);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  const handleSearch = () => {
    fetchUsers(searchValue);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          name="users"
          id="users"
        />
        <button onClick={handleSearch}>Search User</button>
      </div>
      <p>{loading ? "Searching..." : null}</p>
      <div className="user-container">
        {userData ? <User users={userData} /> : "No User Found"}
      </div>
    </div>
  );
};

export default SearchAutocomplete;
