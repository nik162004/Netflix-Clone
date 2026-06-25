import logo from '../assets/Netflix_Logo/01_Netflix_Logo/02_Netflix_Logo_CMYK/Netflix_Logo_CMYK.png'
import '../App.css'
function Navbar(){
    return(
        <>
            <nav className="nav-canvas">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="nav-components">
                    <select name="translate" id="">
                        <option value="En">English</option>
                        <option value="Hi">Hindi</option> 
                    </select>
                    <button>Sign In</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar