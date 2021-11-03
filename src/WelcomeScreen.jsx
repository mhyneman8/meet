import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
        <div className="WelcomeScreen">
            {/* <div className="welcome-image"></div> */}
            <div className="welcome-text">
                <h3 className="welcome">Welcome to</h3>
                <h1 className="welcome2">Meet app</h1> 
            </div>
            
            <div className="welcome-para">
                <h4 className="wel-text">
                    Log in to see upcoming events around the world for full-stack developers
                </h4>
                <div className="button_cont" align="center">
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img 
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google sign-in"
                            />
                        </div>
                        <button onClick={() => { props.getAccessToken() }}
                            rel="nofollow noopener"
                            className="btn-text"
                        >
                            <b>Sign in with google</b>
                        </button>
                    </div> {/* end of google-btn */}
                </div> {/* end of button_cont */}
            
                <a
                    href="https://mhyneman8.github.io/meet/privacy.html"
                    rel="nofollow noonpener"
                >
                    Privacy Policy
                </a>
            </div> {/* end of welcome-para */}
        </div> 
    )
    : null
}

export default WelcomeScreen;