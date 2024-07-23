import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (e) {
      setError(`${e}! Error Occured`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
