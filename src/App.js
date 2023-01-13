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

const App = () => {
    return (
        <div>
            <Container maxWidth="lg">
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
                </Routes>
            </Container>
        </div>
    );
};


export default App;