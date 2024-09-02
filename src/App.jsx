import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About';
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Case from './components/Case';
import TestiMonial from './components/TestiMonial';
import Contact from './components/Contact';
import Cta from './components/Cta';
import Footer from './components/Footer';
import PageProgress from './components/PageProgress';
import MobileHeader from './components/MobileHeader';
import MobileSidebar from './components/MobileSidebar';
import Blog from './components/Blog';
import Page404 from './components/other/Page404';
import ScrollToTop from './components/other/ScrollToTop';


function App() {
  const Navigate = ({page})=>{
    if (page === 'home'){
      return(
        <>
          <MobileHeader/>
          <MobileSidebar/>
          <PageProgress/>
          <Header/>
          <Banner/>
          <div className='all-section-bg' style={{ backgroundImage: 'url(assets/img/bg/pages-bg1.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <About/>
            <Service1/>
            <Service2/>
            <Case/>
            <TestiMonial/>
            <Contact/>
            <Cta/>
            <Footer/>
          </div>
        </>
      );
    }
    else{
      return(
        <>
          <MobileHeader/>
          <MobileSidebar/>
          <PageProgress/>
          <Header/>
          <div className='all-section-bg' style={{ backgroundImage: 'url(assets/img/bg/pages-bg1.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {page === 'about' ? <About/> : null}
            {page === 'contact' ? <Contact/> : null}
            {page === 'blogs' ? <Blog/> : null}
            <Footer/>
          </div>
        </>
      )
    }
  };

  return (
    <>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate page='home' />} />
            <Route path="/about" element={<Navigate page='about' />} />
            <Route path="/contact" element={<Navigate page='contact' />} />
            <Route path="/blogs" element={<Navigate page='blogs' />} />
            <Route path="*" element={<Page404/>} />
          </Routes>
        </Router>
    </>
  );
};

export default App;
