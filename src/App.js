
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
import Ourpartners from './components/Ourpartners'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


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
<<<<<<< HEAD

=======
>>>>>>> 5765d0fe4535586774181e8343ae81e443eab235
    </div>
  );
}

export default App;
