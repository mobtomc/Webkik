import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Footer from './Components/Footer'
const App = () => {
  return (

    <div className="bg-gradient-to-l from-indigo-500 w-full overflow-hidden">
      <BrowserRouter future={{ v7_startTransition: true }}>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="contact" element={<Contact />}/>
    </Routes>
    <Footer/>

    </BrowserRouter>  
    </div>
  )
}

export default App
