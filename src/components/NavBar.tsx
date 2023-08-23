import React, { useState } from 'react';
import AAlogo from '../images/AAlogo.png'

function NavBar() {

    const [isShowing, setIsShowing] = useState(false);

    return (
        <div>
            <nav className="navbar bg-gradient"
            style={{backgroundColor:"var(--gray)"}}
            >
                <div className="container-fluid">
                
                    <img className="img" style={{width:50}} src={AAlogo}/>
                    <p className='justify-start'></p>
           
                    
                    <button className='navbar-toggler-icon rounded bg-warning'></button>

                </div>
            </nav>
        </div >
    )
}

export default NavBar;