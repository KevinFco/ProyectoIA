import { useEffect, useState } from 'react';

export const useFetchEvent = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://proyectogrove.test/api/events/event/${id}`);
        const result = await response.json();
        setData(result.event); // Aquí aseguramos que setData establece el evento correctamente
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData(); // Llamamos a getData() al montar el componente y cada vez que cambia el ID
  }, [id]);

  return {
    data,
    isLoading
  };
};
