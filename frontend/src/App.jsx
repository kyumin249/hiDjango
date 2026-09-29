import {useEffect, useState} from 'reeact';
import MainPage from './pages/MainPage.jsx';
import axios from 'axios';
import './App.css';
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('/api/hello/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Django 연동 에러:", error);
      });
  }, []);
  return (
    <>
      <MainPage />
    </>
  )
}

export default App
