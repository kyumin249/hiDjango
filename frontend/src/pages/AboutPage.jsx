import NavBar from '../component/NavBar.jsx';
import Header from '../component/Header.jsx';
import Aside from '../component/Aside.jsx';
import AboutArticle from '../component/AboutArticle.jsx';
import Footer from '../component/Footer.jsx';
import './AboutPage.css';
function AboutPage() {
  

  return (
    <div className='first'>
      < Header />
      <NavBar />
      <div className='name2'>
        <Aside className='sidebar'/>
        <AboutArticle className='main5'/>
      </div>
      <Footer className='Footer'/>
    </div>
  )
}

export default AboutPage;