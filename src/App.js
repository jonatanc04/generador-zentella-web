import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Generador from './pages/generador';
import Navbar from './comps/Navbar';
import Footer from './comps/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Generador />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;