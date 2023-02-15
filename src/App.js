
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Demo from './components/Demo'
// import Ourpartners from './components/Ourpartners'
import Footer from './components/Footer'
// import { BrowserRouter as Router, Routes, Route ,} from 'react-router-dom'



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Testimonials />
      {/* <Ourpartners /> */}
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
