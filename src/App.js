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
                <Route path="/personal-site" component={<Home/>}/>
                <Route path="/personal-site/home" component={<Home/>}/>
                <Route path="/personal-site/cv" component={<Cv/>}/>
                <Route path="/personal-site/research" component={<Research/>}/>
                <Route path="/personal-site/project" component={<Project/>}/>
                <Route path="/personal-site/blog" component={<Blog/>}/>
                <Route path="/personal-site/fact" component={<Fact/>}/>
            </Routes>
        </div>
    );
};


export default App;