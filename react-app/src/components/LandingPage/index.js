import React from "react";
import { Redirect, useHistory, NavLink } from "react-router-dom";
// import closeup_cafe from "../../site-images/closeup_cafe.jpeg"
import "./LandingPage.css";

const LandingPage = ({ authenticated }) => {
    const history = useHistory();
    if (authenticated) {
        return <Redirect to="/home" />
    }

    return (
        <>
            <div className="landing-background-container">
                    <div className="landing-button-container">
                        <div onClick={() => history.push("/login")}
                            className="landing-button-div login-button"
                        >Log In
                        </div>
                        <div onClick={() => history.push("/signup")}
                            className="landing-button-div login-button"
                        >Sign Up
                        </div>
                    </div>
                    <div className="landing-container">
                        <div className="landing-container-left">
                            <div className="landing-shopping-bag">
                                <i className="fas fa-shopping-bag"></i>
                            <div/>
                            <div className="landing-site-title">
                                <div className="logo"></div>
                            </div>
                            <div className="category_container">
                               <ul className="cat_flex_container">
                                    <li>
                                        <NavLink to="/" exact={true}><i className="fas fa-sign"></i>  Real Estate</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fab fa-bitcoin"></i>  Crypto</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fab fa-amazon"></i>  Amazon FBA</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fab fa-lyft"></i>  Gig Economy</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fab fa-instagram-square"></i>  Influencer Economy</NavLink>
                                    </li>
                               </ul>
                               <ul className="cat_flex_container">
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fas fa-chart-line"></i>  Trading</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fas fa-laptop-house"></i>  Freelancing</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fas fa-shopping-cart"></i>  eCommerce</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fas fa-shipping-fast"></i>  Dropshipping</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" exact={true}><i class="fas fa-globe"></i>  Entrepreneurship 101</NavLink>
                                    </li>
                               </ul>
                            </div>
                            <div className="landing-tagline">
                                <p>Tired of the 9 to 5 grind.  Want to stop making somebody else rich and be your own boss but don't know where to start... Get guruud!!!</p>
                            </div>
                            <div className="landing-color-divider"></div>
                            <div className="landing-message">
                                <h1>The only place online where the budding entrepreneurs of tomorrow, can get the experienced advice from the successful entrepreneurs of yesterday and today!</h1>
                            </div>
                        </div>
                        <div className="landing-container-right">
                            <div className="landing-logo-img">
                                {/* <img src={closeup_cafe} alt=""/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
   )
};

export default LandingPage;