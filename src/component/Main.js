import React from 'react';
import '../assests/content.css'

function Main() {
    return (
        <div className="content">
            <div className="input">
                <p className="input-show">Take a note...</p>
                <div className="content-icon-grp">
                    <div className="content-icon">
                        <i className="fa-check-square far"></i>
                    </div>
                    <div className="content-icon " id='spl'>
                        <i className="fa-paint-brush fas"></i>
                    </div>
                    <div className="content-icon">
                        <i className="fa-image far"></i>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Main
