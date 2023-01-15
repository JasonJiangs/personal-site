import React from 'react';
import NavigationBar from "./Components/NavBar/NavigationBar";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Cv from "./Components/CV/CV";
import Research from "./Components/Research/Research";
import Project from "./Components/Project/Project";
import Blog from "./Components/Blog/Blog";
import Fact from "./Components/Fact/Fact";
import Publication from "./Components/Publication/Publication";
import {Container} from "@mui/material";
import HnoxPred from "./Components/Research/Elements/R1-Bioinformatics-HNOXPred/HnoxPred";
import Zanglab from "./Components/Research/Elements/R2-Bioinformatics-ZangLab/zanglab";
import Casia from "./Components/Research/Elements/R3-Algorithm-CASIA/CASIA";
import Hci from "./Components/Research/Elements/R5-HCI/Hci";
import Simulator from "./Components/Research/Elements/R4-JHUCSSE/Simulator";
import Dashboard from "./Components/Research/Elements/R4-JHUCSSE/Dashboard";
import Cnn from "./Components/Research/Elements/R6-CNN/Cnn";

const App = () => {
    return (
        <div style={{width:"90%", marginLeft:"5%"}}>
            {/*<Container maxWidth="lg">*/}
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/cv" element={<Cv/>}/>
                    <Route path="/research" element={<Research/>}/>
                    <Route path="/publication" element={<Publication/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/fact" element={<Fact/>}/>
                    <Route path="/hnoxpreddetail" element={<HnoxPred/>}/>
                    <Route path="/simulatordatail" element={<Simulator/>}/>
                    <Route path="/dashboarddetail" element={<Dashboard/>}/>
                    <Route path="/zanglabdetail" element={<Zanglab/>}/>
                    <Route path="/cnndetail" element={<Cnn/>}/>
                    <Route path="/casiadetail" element={<Casia/>}/>
                    <Route path="/hcidetail" element={<Hci/>}/>
                </Routes>
            {/*</Container>*/}
        </div>
    );
};


export default App;