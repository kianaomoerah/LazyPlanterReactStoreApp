import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Water from './Water';
import Light from './Light';

function App() {

    const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    });
  };

  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={ <Home handleScroll={handleScroll}/> } />
          <Route path="/water" element ={ <Water handleScroll={handleScroll}/>} />
          <Route path="/light" element ={ <Light handleScroll={handleScroll}/> } />
        </Routes>
        <Footer />
      </>
  );
}

export default App;