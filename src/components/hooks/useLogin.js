import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../global/GlobalState';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { setUser } = useContext(GlobalContext);

    const login = async (email,password) => {
      try {
        const response = await fetch('http://proyectogrove.test/api/users/login',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                }), 
            }
        );
        const result = await response.json();
        setUser(result);
        navigate('/home');
         // Aquí aseguramos que setData establece el evento correctamente
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

  return {
    isLoading,
    login
  };
};
