/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function useFetch({ url, initialState }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(initialState);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((results) => setData(results.data))
      .catch((error) => setError(false))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
