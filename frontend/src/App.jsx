import MainPage from './pages/MainPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import DiaryPage from './pages/DiaryPage.jsx';
import ItemsPage from './pages/ItemsPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/diary" element={<DiaryPage />} />
            <Route path="/items" element={<ItemsPage />} />
          </Routes>
      </BrowserRouter>
    

    </>
  )
}

export default App
