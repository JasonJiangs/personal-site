import React from 'react';
import cvPDF from '../../Assets/Files/CV Shiyu Jiang.pdf'

const Cv = () => {
    return (
        <div>
            <h5 style={{textAlign:"center", margin:"3%"}}>
                <a href={cvPDF} >Link to full curriculum vitae</a>
            </h5>
        </div>
    );
};

export default Cv;