import React,{useState,useEffect} from 'react';
import Area from '../components/Area';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();  
    useEffect(() => {
      const token = localStorage.getItem('token');
  
      if (token) {
        axios.post('http://example.com/validateToken', { token })
          .then(response => {
            if (response.data.valid) {
              setIsAuthenticated(true);
            } else {
                navigate('/login');
            }
          })
          .catch(error => {
            console.error('Errorrr', error);
            navigate('/login');
        })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        navigate('/login');
    }
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (!isAuthenticated) {
      return <div>Unauthorized , Please Login Or SignUp to Access This Page</div>; 
    }
  
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dashboard</h1>
        <Area />
    </div> 
  );
};

export default Dashboard;
