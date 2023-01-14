import React from 'react';

const Publication = () => {
    return (
        <div>
            <div className="container">
                <div className="row" >
                    <h2 style={{marginTop:"2%"}}>In Press</h2>
                    <p className="col-12">[1] Kim, J. M., Han, J., & Jiang, S. (2022). The impact of comment history disclosure on online comment posting behaviors. Information
                        Technology & People (IF=3.879), (ahead-of-print).</p>
                    <p className="col-12">[2] Jiang, S., Abdalla, H. B., Bi, C., Zhu, Y., Tian, X., Yang, Y., & Wong, A. (2022). HNOXPred: a web tool for the prediction of gas-sensing
                        H-NOX proteins from amino acid sequence. Bioinformatics (IF=6.931), 38(19), 4643-4644.</p>
                    <p className="col-12">[3] Jiang, S., Jia, J., Yuan, Y., Wu, Y., & Wang, T. (2021, November). Research on China’s Primary Industry: Evidence From Regional Analysis
                        Based on SVM and Moran’s Index. In 2021 IEEE 7th International Conference on Cloud Computing and Intelligent Systems (CCIS) (pp.
                        1-8). IEEE.</p>
                    <p className="col-12">[4] Zheng, S., Wu, Y., Jiang, S., Lu, C., & Gupta, G. (2021, July). Deblur-yolo: Real-time object detection with efficient blind motion deblurring.
                        In 2021 International Joint Conference on Neural Networks (IJCNN) (pp. 1-8). IEEE.</p>
                    <h2 >Under Review</h2>
                    <p className="col-12">[1] Ye, H., Lv, J., Zhan, Y., Xue, Z., Li, T., Jiang, S., Huang, M., Dong, L., Ren, G., Lei, Q., Fang, W., & Xie, H. (2023). Phase Behavior and
                        Co-localization of Ovalbumin-Lysozyme Complexes.</p>
                    <p className="col-12">[2] Xxx, xxx, Jiang, S., Luo, J., & Shoaib, M. AI-LearnMath: An Artificial Intelligence-Based Interactive Learning Platform to
                        Assist Visually Impaired Children in Learning Mathematics. In 25th International Conference on Human-Computer Interaction
                        (HCII). Springer, Cham.</p>
                    {/*<p className="col-12">Pub 3</p>*/}
                    {/*<p className="col-12">Pub 3</p>*/}
                    <button type="button" className="btn btn-light"
                            style={{marginTop: "3%", marginBottom:"3%", width:"50%", marginLeft:"25%"}}>
                        <a href="https://scholar.google.com/citations?user=DBJYZiYAAAAJ&hl=en">Google Scholar Link</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Publication;