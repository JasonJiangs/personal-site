import React from 'react';

const Project = () => {
    return (
        <div className="container px-4 text-center">
            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true"
                 style={{width:"40%", marginLeft:"30%", marginTop:"2%", marginBottom: "2%"}}>
                <div className="toast-header">
                    <strong className="me-auto">Personal Works</strong>
                    <small></small>
                    <button type="button" className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="toast-body">
                    This section has some works on software engineering.
                </div>
            </div>
            <div className="row gx-5">
                <div className="col">
                    <div className="p-3">TBD</div>
                </div>
                <div className="col">
                    <div className="p-3">TBD</div>
                </div>
            </div>
        </div>
    );
};

export default Project;