import React,{useContext} from 'react'
import { Global } from '../../App'
import './Navbar.css'
import logo from '../../images/logo.png'
import search from '../../images/search.png'
import home from '../../images/home.png'
import user from '../../images/user-1.png'
import { Link } from 'react-router-dom'
function Navbar() {
    let {bg,setBg}=useContext(Global)
    let setBackground=()=>{
        if(bg.color==='black'){
        setBg({
            backgroundColor:"black",
            color:'white'
        })
    }
    else{
        setBg({
            backgroundColor:"white",
            color:'black'
        })
    }
    }
  return (
    <>
     <div id="navbar" >
        <nav className='nav-element' style={bg}>
            <div className="search-bar">
                <img id='logo' src={logo} alt="" />
                <div className="search-box">
                    <img id='search' src={search} alt="" />
                    <input type="text" id="search-input" placeholder='Search' />
                </div>
            </div>
            <div className="list-items">
                <ul className="ul">
                    <li>
                        <img src={home} alt="" />
                      <Link style={{textDecoration:"none" ,color:bg.color}} to={'/'}>Home</Link>
                    </li>
                </ul>
            </div>
            <div className="id-logo">
                <img src={user} alt="" />
                <div className="online"></div>
                
            </div>
            <button onClick={setBackground}>
                {
                    bg.color==='white'?'Dark Mode':'Light Mode'
                }
            </button>
        </nav>
     </div>
    </>
  )
}

export default Navbar