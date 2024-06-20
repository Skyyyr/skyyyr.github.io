import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AppNavbar from './components/AppNavBar'
import PageNotFound from "./pages/PageNotFound"
import Home from "./pages/Home"
import Roadmap from "./pages/Roadmap"
import Faq from "./pages/Faq"
import PatchNotes from "./pages/PatchNotes"
import About from "./pages/About"

function App() {

  return (
    <div className={"App"}>
        <Router>
            <AppNavbar/>
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/patchnotes' element={<PatchNotes />} />
                <Route path='/roadmap' element={<Roadmap />} />
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
