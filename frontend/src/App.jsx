import NavBar from './component/NavBar.jsx';
import Header from './component/Header.jsx';
import Aside from './component/Aside.jsx';
import MainArticle from './component/MainArticle.jsx';
import './App.css';
function App() {
  

  return (
    <>
      < Header />
      <NavBar />
      <div className='name'>
        <Aside />
        <MainArticle />
      </div>
      
    </>
  )
}

export default App
