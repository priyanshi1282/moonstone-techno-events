import './App.css'
import Navbar from './components/Navbar'
import EventSection from './components/EventSection'
import MoonstoneSection from './components/MoonstoneSection'
import Credits from './components/Credits'

function App() {
  return (
   <div className='App text-white'>
    <Navbar />
    <EventSection />
    <MoonstoneSection />
    <Credits />
   </div>
  )
}

export default App
