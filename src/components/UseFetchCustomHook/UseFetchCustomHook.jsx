import { useEffect, useState } from "react";

const UseFetchCustomHook = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.status);
      const result = response.json();
      setData(result);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, loading };
};

export default UseFetchCustomHook;
