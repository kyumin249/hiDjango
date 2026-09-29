import NavBar from '../component/NavBar.jsx';
import Header from '../component/Header.jsx';
import Aside from '../component/Aside.jsx';
import DiaryArticle from '../component/DiaryArticle.jsx';
import Footer from '../component/Footer.jsx';
import './DiaryPage.css';
function DiaryPage() {
  

  return (
    <div className='first'>
      < Header />
      <NavBar />
      <div className='name2'>
        <Aside className='sidebar'/>
        <DiaryArticle className='main4'/>
      </div>
      <Footer className='Footer'/>
    </div>
  )
}

export default DiaryPage;