import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WhoAreWe from './components/WhoAreWe';
import Navbar from './components/Navbar';
import Gifts from './components/Gifts';
import GiftedCategory from './components/GiftedCategory';
import Stories from './components/Stories';
import Favourites from './components/Favourites';
function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoarewe" element={<WhoAreWe />} />
        <Route path="/stories" element={<Stories/>} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/gifts/:category" element={<GiftedCategory />} />
      </Routes>
    </Router>

  );
}
export default App;
