import React from 'react';
import NavigationBar from "./Components/NavBar/NavigationBar";
import { Routes, Route} from "react-router-dom";
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
                <Route path="/personal-site" element={<Home/>}/>
                <Route path="/personal-site/home" element={<Home/>}/>
                <Route path="/personal-site/cv" element={<Cv/>}/>
                <Route path="/personal-site/research" element={<Research/>}/>
                <Route path="/personal-site/project" element={<Project/>}/>
                <Route path="/personal-site/blog" element={<Blog/>}/>
                <Route path="/personal-site/fact" element={<Fact/>}/>
            </Routes>
        </div>
    );
};


export default App;