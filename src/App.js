import { createContext,useState } from 'react'
import './App.css';
import LeftBar from './Components/LeftBar/LeftBar';
import Navbar from './Components/Navbar/Navbar';
import Rightbar from './Components/RightBar/Rightbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Network from './Pages/Network';
export const Global = createContext()
function App() {
  const [bg, setBg] = useState({
    backgroundColor:'white',
    color:'black'
  })
  return (
    <>
      <Global.Provider value={{bg:bg,setBg:setBg}}>
        <Router>
          <Navbar />
          <div className="bar">
            <LeftBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/network' element={<Network />} />
            </Routes>
            <Rightbar />
          </div>
        </Router>
      </Global.Provider>
    </>
  );
}

export default App;
