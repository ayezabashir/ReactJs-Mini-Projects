import { useEffect, useState } from "react";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length) {
        setUserData(data.users);
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(e);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="search-container">
      <input type="text" name="search-user" placeholder="Search User..." />
    </div>
  );
};

export default SearchAutocomplete;
