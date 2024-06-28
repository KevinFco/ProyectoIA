import { useState } from 'react';

const useSignIn = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async (name, username, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://proyectogrove.test/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to sign in: ${response.statusText}`);
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Failed to sign in', error);
      setError('Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    error,
    signIn
  };
};

export default useSignIn;
