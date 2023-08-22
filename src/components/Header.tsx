import React, { useState } from 'react';
import ProgChart from './ProgChart';

function Header() {

    const [isShowing, setIsShowing] = useState(false);

    return (
        <React.Fragment>
            <div className="container">

                <h1 className='text-primary' hidden={isShowing}>Welcom to Chiron</h1>

                <button
                    type="button" className="btn btn-warning gradient"
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                    Toggle
                </button>

                
            </div>
        </React.Fragment>
    )
}

export default Header;