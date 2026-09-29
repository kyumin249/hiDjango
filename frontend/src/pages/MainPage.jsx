
import NavBar from '../component/NavBar.jsx';
import Header from '../component/Header.jsx';
import Aside from '../component/Aside.jsx';
import HomeArticle from '../component/HomeArticle.jsx';
import Footer from '../component/Footer.jsx';
import './MainPage.css';
function MainPage() {
  

  return (
    <div className='first'>
      < Header />
      <NavBar />
      <div className='name2'>
        <Aside className='sidebar'/>
        <HomeArticle className='main2'/>
      </div>
      <Footer className='Footer'/>
    </div>
  )
}

export default MainPage;