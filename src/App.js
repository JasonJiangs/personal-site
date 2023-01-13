import React from 'react';
import NavigationBar from "./Components/NavBar/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
const App = () => {
    return (
        <div>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path="/" element={<Home />} />*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
            <NavigationBar/>

        </div>
    );
};


export default App;