import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContetxt } from '../context/AuthProvider';

const useAxiosSecure = () => {
  const { userLogout } = useContext(AuthContetxt); 
  const navigate = useNavigate(); 

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', 
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await userLogout();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [userLogout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
