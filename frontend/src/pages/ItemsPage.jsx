import NavBar from '../component/NavBar.jsx';
import Header from '../component/Header.jsx';
import Aside from '../component/Aside.jsx';
import ItemsArticle from '../component/ItemsArticle.jsx';
import Footer from '../component/Footer.jsx';
import './ItemsPage.css';
function ItemsPage() {
  

  return (
    <div className='first'>
      < Header />
      <NavBar />
      <div className='name2'>
        <Aside className='sidebar'/>
        <ItemsArticle className='main3'/>
      </div>
      <Footer className='Footer'/>
    </div>
  )
}

export default ItemsPage;