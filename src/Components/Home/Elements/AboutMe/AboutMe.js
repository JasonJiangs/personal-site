import React from 'react';
import PinDropIcon from '@mui/icons-material/PinDrop';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import classes from "./AboutMe.module.css";

const AboutMe = () => {
    return (
        <div>
            <div className="card" style={{margin:"1%"}}>
                <div className="card-body">
                    <img/>
                    <h4 className="card-title">Shiyu Jiang</h4>
                    <h6 className="card-subtitle mb-2 text-muted">A passionate researcher and software developer</h6>
                    <p className="card-text">Greetings, welcome to my personal website.</p>
                    <PinDropIcon/>
                    <text> Location: Baltimore, MD</text>
                    <br/>
                    <WorkHistoryIcon/>
                    <text> Work Site: JHUCSSE & UVa</text>
                    <br/>
                    <EmailIcon/>
                    <text>Email: shiyujiang23@gmail.com</text>
                    <br/>
                    <SchoolIcon/>
                    <a href="https://scholar.google.com/citations?user=DBJYZiYAAAAJ&hl=en" className="card-link"> Google Scholar</a>
                    <br/>
                    <GitHubIcon/>
                    <a href="https://github.com/jasonjiangs" className="card-link"> GitHub</a>
                    <br/>
                    <LinkedInIcon/>
                    <a href="https://www.linkedin.com/in/shiyu-jiang-a942881bb/" className="card-link"> LinkedIn</a>
                    <br/>
                    <InstagramIcon/>
                    <a href="https://www.instagram.com/shiyujiang23/" className="card-link"> Instagram</a>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;