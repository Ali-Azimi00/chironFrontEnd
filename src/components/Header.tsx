import React, { useState } from 'react';

function Header() {

    const [isShowing, setIsShowing] = useState(false);

    return (
        <React.Fragment>
            <div className="px-auto">

                <h1 className='text-blue' hidden={isShowing}>Welcom to Chiron</h1>

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