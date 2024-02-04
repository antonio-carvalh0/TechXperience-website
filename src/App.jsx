import './App.css'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Registration from './components/registration/Registration'
import Schedule from './components/schedule/Schedule'
import Speakers from './components/speakers/Speakers'

function App() {  

  return (
    <>
      <Navbar />
      <About />
      <Speakers />
      <Schedule />
      <Registration />
      <Footer />
    </>
  )
}

export default App
