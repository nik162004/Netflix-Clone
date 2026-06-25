import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import { Page4 } from './pages/Page4'

function App() {
  return(
    <>
      <Navbar />
      <Home />
      <Page2/>
      <Page3/>
      <Page4 />
    </>
  )
}

export default App
