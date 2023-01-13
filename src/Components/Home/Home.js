import React from 'react';
import classes from "./Home.module.css";
import AboutMe from "./Elements/AboutMe/AboutMe";
import Brief from "./Elements/Brief/Brief";

const Home = () => {
    return (
        <div className="text-center">
            <div className="row">
                <div className="col-3">
                    <AboutMe/>
                </div>
                <div className="col-9">
                    <Brief/>
                </div>
            </div>
        </div>
    );
};

export default Home;