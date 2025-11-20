import axios from "axios";
import React, { useEffect, useState } from "react";

const useAppsData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../../appsData.json")
      .then((data) => setData(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
};

export default useAppsData;
