import React from 'react';


const Brief = () => {

    return (
        <div>
            <div className="list-group">
                <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">About ME</h5>
                        <small className="text-muted"></small>
                    </div>
                    <p className="mb-1" style={{textAlign:"left"}}>
                        This is Shiyu Jiang (江世宇), a master student majoring in computer science at Whiting School of
                        Engineering, Johns Hopkins University. In the past, I have working experience as a research
                        assistant at the Chinese Academy of Sciences advised by
                        <a href="https://people.ucas.edu.cn/~zhenshen?language=en"> Dr. Zhen Shen</a> in algorithm development,
                        and Wenzhou-Kean University advised by <a href="https://wku.edu.cn/faculty/aloysius-wong/"> Dr. Aloysius Wong </a>
                         in Bioinformatics.
                    </p>

                    <p className="mb-1" style={{textAlign:"left"}}>
                        Currently, I am working as a research assistant in the Center for Systems Science and Engineering
                        at JHU advised by <a href="https://systems.jhu.edu/kimia/"> Dr. Kimia Ghobadi</a> in simulation model development on the topic of infectious diseases,
                        and working at <a href="https://zanglab.github.io/"> Chongzhi Zang Lab</a> in bioinformatics at UVa School of Medicine.
                    </p>
                    <p className="mb-1" style={{textAlign:"left"}}>
                        I am planning to apply for a computer science Ph.D. degree in the fields of bioinformatics,
                        computational biology and healthcare systems.
                    </p>
                    <small className="text-muted"></small>
                </a>
                <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Research Interest</h5>
                        <small className="text-muted"></small>
                    </div>
                    <p className="mb-1" style={{textAlign:"left"}}>
                        My research interests include bioinformatics, software engineering, and healthcare.
                        I applied deep learning and machine learning skills in fields like spatial analysis,
                        computer vision, quantitative trading.
                        Besides, I built a bioinformatic web tool called HNOXPred by developing protein sequencing algorithms,
                        which leads me get interested in Bioinformatics area.
                    </p>
                    <small className="text-muted"></small>
                </a>
                <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Software Engineer Skill</h5>
                        <small className="text-muted"></small>
                    </div>
                    <p className="mb-1" style={{textAlign:"left"}}>
                        I interned at Alibaba Cloud - Cloud Products & Services team as a software engineer.
                        I am passionate with software engineer work. Java and Python are two major programming language
                        that I frequently use. Golang and blockchain is my recent interest. Source code is always insteresting.
                    </p>
                    <small className="text-muted"> </small>
                </a>
                <a className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Fact</h5>
                        <small className="text-muted"></small>
                    </div>
                    <p className="mb-1" style={{textAlign:"left"}}>
                        In my part-time, I am a soccer fan and skillfull soccer player.
                        I was a soccer team captain of my high school and undergrad university (welcomed to invite me to the match).
                        Besides, I can play table tennis very well and won top prize when I was young.
                        I like the competitive feeling that sports bring, which can also bring me fitness and confidence.
                        I also like gym and traveling.
                        Guitar and piano are instruments I play occasionally.
                    </p>
                    <small className="text-muted"></small>
                </a>
            </div>
        </div>
    );
};

export default Brief;