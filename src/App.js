import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Water from './Water';

function App() {

  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/water" element ={ <Water />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;