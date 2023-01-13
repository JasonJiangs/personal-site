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
                        <a className="navbar-brand" href="/personal-site">Shiyu's Website</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <HomeIcon className={classes.NavLi}/>
                                    <a className="nav-link active" href="/personal-site/home">
                                        Home
                                        <span className="visually-hidden">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <FeedIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/personal-site/cv">
                                        CV
                                    </a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <BiotechIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/personal-site/research">Research</a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <TerminalIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/personal-site/project">Project</a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <DocumentScannerIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/personal-site/blog">Blog</a>
                                </li>
                                <li className="nav-item" style={{display:"flex", alignItems:"center", margin: "2%"}}>
                                    <PsychologyAltIcon className={classes.NavLi}/>
                                    <a className="nav-link" href="/personal-site/fact">Fact</a>
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