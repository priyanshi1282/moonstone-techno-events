import './App.css'
import Navbar from './components/Navbar'
import EventSection from './components/EventSection'
import MoonstoneSection from './components/MoonstoneSection'
import Credits from './components/Credits'
import Footer from './components/Footer'

function App() {
  return (
   <div className='App text-white'>
    <Navbar />
    <EventSection />
    <MoonstoneSection />
    <Credits />
    <Footer />
   </div>
  )
}

export default App
