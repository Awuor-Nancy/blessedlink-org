
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Testimonials from './components/Testimonials'
// import Contact from './components/Contact'
import Demo from './components/Demo'
import Ourpartners from './components/Ourpartners'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route ,} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/testimonial' element={<Testimonials />} />
          <Route path='/partners' element={<Ourpartners />} />
          <Route path='demo' element={ <Demo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
