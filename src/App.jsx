import './App.css'
import Navbar from './components/Navbar'
import EventSection from './components/EventSection'
import MoonstoneSection from './components/MoonstoneSection'

function App() {
  return (
   <div className='App text-white'>
    <Navbar />
    <EventSection />
    <MoonstoneSection />
   </div>
  )
}

export default App
