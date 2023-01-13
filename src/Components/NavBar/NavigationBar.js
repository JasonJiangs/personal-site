import React, {Component} from 'react';
import classes from './navBar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import BiotechIcon from '@mui/icons-material/Biotech';
import TerminalIcon from '@mui/icons-material/Terminal';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import {Link} from "react-router-dom";

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/personal-site">Shiyu's Website</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <HomeIcon className={classes.NavLi}/>
                                    <Link className="nav-link active" to="/personal-site/home">
                                        Home
                                        <span className="visually-hidden">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <FeedIcon className={classes.NavLi}/>
                                    <Link className="nav-link" to="/personal-site/cv">
                                        CV
                                    </Link>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <BiotechIcon className={classes.NavLi}/>
                                    <Link className="nav-link" to="/personal-site/research">Research</Link>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <TerminalIcon className={classes.NavLi}/>
                                    <Link className="nav-link" to="/personal-site/project">Project</Link>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <DocumentScannerIcon className={classes.NavLi}/>
                                    <Link className="nav-link" to="/personal-site/blog">Blog</Link>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <PsychologyAltIcon className={classes.NavLi}/>
                                    <Link className="nav-link" to="/personal-site/fact">Fact</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-sm-2" type="search" placeholder="Search"
                                       ></input>
                                    <button className="btn btn-secondary my-2 my-sm-0" type="submit"
                                            >Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavigationBar;