import { useEffect, useState } from "react";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUser, setFilteresUser] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        userData && userData.length
          ? userData.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : null;
      setFilteresUser(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUserData(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userData, filteredUser);

  return (
    <div className="search-container">
      <input
        value={searchParam}
        onChange={handleChange}
        type="text"
        name="search-user"
        placeholder="Search User..."
      />
    </div>
  );
};

export default SearchAutocomplete;
