// hooks/useFetchData.js
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("http://proyectogrove.test/api/events/all");
      const result = await response.json();
      setData(result.events); 
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
  };
};
