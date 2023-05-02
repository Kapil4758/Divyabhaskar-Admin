import React from "react";
import Divyabhaskar from "../assets/images/divyabhaskar.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {

    let navigate = useNavigate();

    const userLogout = (e) => {

        sessionStorage.setItem("masterAdmin", "");
        navigate("/login")
        
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={Divyabhaskar} alt="Logo" />
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={"nav-item"}>
                                <NavLink
                                    to="/"
                                    style={({ isActive }) => ({
                                        color: isActive ? '#02395a' : '#FFFFFF'
                                    })}
                                >Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/blogs"
                                    style={({ isActive }) => ({
                                        color: isActive ? '#02395a' : '#FFFFFF'
                                    })}
                                >Blogrecord</NavLink>
                            </li>
                            <li className="nav-item">
                                <button onClick={(e) => userLogout(e)}>Log out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;