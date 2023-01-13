import React, {Component} from 'react';
import classes from './navBar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import BiotechIcon from '@mui/icons-material/Biotech';
import TerminalIcon from '@mui/icons-material/Terminal';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Shiyu's Website</a>
                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%", fontSize:"20px"}}>
                                    <HomeIcon className={classes.NavLi}/>
                                    <a className="nav-link active" href="/home">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%", fontSize:"20px"}}>
                                    <FeedIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/cv">
                                        CV
                                    </a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%", fontSize:"20px"}}>
                                    <BiotechIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/research">Research</a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%", fontSize:"20px"}}>
                                    <TerminalIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/project">Project</a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%", fontSize:"20px"}}>
                                    <DocumentScannerIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/blog">Blog</a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%", fontSize:"20px"}}>
                                    <PsychologyAltIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/fact">Fact</a>
                                </li>
                                {/*<li className="nav-item dropdown">*/}
                                {/*    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"*/}
                                {/*       role="button" aria-haspopup="true" aria-expanded="false">Facts</a>*/}
                                {/*    <div className="dropdown-menu">*/}
                                {/*        <a className="dropdown-item" href="#">Action</a>*/}
                                {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                                {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                                {/*        <div className="dropdown-divider"></div>*/}
                                {/*        <a className="dropdown-item" href="#">Separated link</a>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-sm-2" type="search" placeholder="Search"
                                       style={{fontSize: "20px"}}></input>
                                    <button className="btn btn-secondary my-2 my-sm-0" type="submit"
                                            style={{fontSize: "20px"}}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavigationBar;