import React from 'react';
import classes from "./AboutMe.module.css";
import avatarImg from "../../../../Assets/image/avatar.jpg"
import PinDropIcon from '@mui/icons-material/PinDrop';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

const AboutMe = () => {
    return (
        <div>
            <div className="card" style={{margin:"1%"}}>
                <div className="card-body">
                    <div >
                        <img src={avatarImg} width="60%" style={{
                            margin: "0 auto", borderRadius: "35px", boxShadow: "5px 5px 5px #888888", borderStyle: "solid"}}/>
                    </div>
                    <br/>
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
                    <text>--Views--</text>
                    <br/>
                    <a href='https://clustrmaps.com/site/1bsf3'  title='Visit tracker'>
                        <img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=0jrG4ANmAJYOwb9_vESb8sYr0bwBhK8fH2NA-jxpKAo&co=3b4954'/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;