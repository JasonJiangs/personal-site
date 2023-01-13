import React from 'react';
import NavigationBar from "./Components/NavBar/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cv from "./Components/CV/CV";
import Research from "./Components/Research/Research";
import Project from "./Components/Project/Project";
import Blog from "./Components/Blog/Blog";
import Fact from "./Components/Fact/Fact";
const App = () => {
    return (
        <div>
            <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cv" element={<Cv />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/fact" element={<Fact />} />
                </Routes>
        </div>
    );
};


export default App;