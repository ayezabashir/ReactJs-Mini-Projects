import { useState } from "react";
import "./searchautocomplete.css";

const SearchAutocomplete = () => {
  const [searchValue, setSearchValue] = useState("");

  async function fetchUsers(username) {
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${username}`
    );
    const data = await response.json();
    console.log(data);
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
      <div className="user-container"></div>
    </div>
  );
};

export default SearchAutocomplete;
