import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Header = (props) => {

    const [showMe, setShowMe] = useState(true);
    function toggle(){
        setShowMe(!showMe);
    }
    return (
        <header>
            <nav className="navbar sticky-top navbar-light bg-white shadow-sm py-2 py-md-3 text-center">
                <div className="container">
                    <Link className="navbar-brand fs-3" href="/" >
                            <img src="/static/images/Gcare.svg" height={'50px'} alt=""/>
                    </Link>
                    <button className="navbar-toggler" onClick={toggle} type="button"  aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={!showMe? "collapse navbar-collapse show" :"collapse navbar-collapse"} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link  href="/"><a className="nav-link active" onClick={toggle}>Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="/login"><a className="nav-link " onClick={toggle}>Log In</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="/profile"><a className="nav-link " onClick={toggle}>Profile</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="/notification"><a className="nav-link " onClick={toggle}>Notification</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="/history"><a className="nav-link " onClick={toggle} >History</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="/custormer_support"><a className="nav-link " onClick={toggle}>Customer Support</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link  href="/downloadapp"><a className="nav-link " onClick={toggle}>Download App</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="alert alert-primary" role="alert">
                <div className="container text-center">
                    Dear Concern,
                    Good Day!
                    Greetings from G-Care.
                    Bio-Sample Charter Piloting is going on...
                    For Further Assistance , Please Contact...
                    +88 01873149414
                </div>
            </div>
        </header>
    );
}

export default Header;