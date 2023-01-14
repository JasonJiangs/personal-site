import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import SourceIcon from '@mui/icons-material/Source';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import hnoxpredImg from '../../Assets/image/hnoxpred.png'
import dashboard1 from '../../Assets/image/dashboard1.png'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import VI1 from '../../Assets/image/VI1.png'
import DeblurYOLO from '../../Assets/image/DeblurYOLO.png'
import {Link} from "react-router-dom";

const Research = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Card sx={{ maxWidth: "99%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="200"
                                image={hnoxpredImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    HNOXPred
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    This work developed a user-friendly web server as a tool for predicting gas
                                    sensing H-NOX proteins from amino acid sequence input. A Python-based algorithm is
                                    developed to locate fitted sequences and calculate its physicochemical properties
                                    and assigned confidence scores based on a database of H-NOX proteins accordingly. The algorithm
                                    is deployed online by using Flask framework, MySQL database, and JavaScript.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CodeIcon/>&nbsp;
                                <a href="https://github.com/JasonJiangs/HNOX_Pred">Code</a>
                                &nbsp;&nbsp;&nbsp;
                                <SourceIcon/>
                                <a href="https://academic.oup.com/bioinformatics/article-abstract/38/19/4643/6673135">Paper</a>
                                &nbsp;&nbsp;
                                <OpenInBrowserIcon/>
                                <a href="https://www.hnoxpred.com/">Tool</a>&nbsp;
                                <UnfoldMoreIcon/>
                                <Link to="">More</Link>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ maxWidth: "99%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="200"
                                image={dashboard1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    Infectious Disease Simulation Model (Ongoing)
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    This work intends to build a simulation model to simulate pandemic disease spreading
                                    under different scenarios in order to better evaluate and prevent similar cases. We developed features
                                    to observe the infection condition when agent have different mask-wearing conditions and PCR testing results.
                                    Meanwhile, we develop a dashboard for users to assess model result in a comprehensive and interactive way.
                                </Typography>
                            </CardContent>
                            <CardActions style={{maxWidth:"100%"}}>
                                <CodeIcon/>&nbsp;
                                <a href="https://github.com/caranha/Koudou">Code</a>
                                &nbsp;&nbsp;&nbsp;
                                <SourceIcon/>
                                <a href="">Paper</a>
                                &nbsp;&nbsp;
                                <OpenInBrowserIcon/>
                                <a href="https://www.hnoxpred.com/">Dashboard</a>&nbsp;
                                <UnfoldMoreIcon/>
                                <Link to="">More</Link>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ maxWidth: "99%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="200"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    Zang Lab
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    Content
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CodeIcon/>&nbsp;
                                <a href="">Code</a>
                                &nbsp;&nbsp;&nbsp;
                                <SourceIcon/>
                                <a href="">Paper</a>
                                &nbsp;&nbsp;
                                <UnfoldMoreIcon/>
                                <Link to="">More</Link>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card sx={{ maxWidth: "99%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="200"
                                image={DeblurYOLO}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    CNN for Visual Recognition
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    This work proposed Deblur-YOLO, an efficient, YOLO-based and detection-driven approach
                                    robust to motion blur photographs.We introduce a generative adversarial network
                                    with a dilated feature pyramid generator, a pair of multi-scale discriminators with
                                    spectral normalization, and a detection discriminator. We design a new image quality
                                    metric called Smooth Peak Signal-to-Noise Ratio (SPSNR) for measuring the smoothness
                                    of the reconstructed image.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/*<CodeIcon/>&nbsp;*/}
                                {/*<a href="">Code</a>*/}
                                {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                <SourceIcon/>
                                <a href="https://ieeexplore.ieee.org/document/9534352">Paper</a>
                                &nbsp;&nbsp;
                                <UnfoldMoreIcon/>
                                <a href="">More</a>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ maxWidth: "99%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="200"
                                image=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    Quantitative Trading Algorithm
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    content
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CodeIcon/>&nbsp;
                                <a href="">Code</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <SourceIcon/>
                                <a href="">Paper</a>
                                &nbsp;&nbsp;
                                <UnfoldMoreIcon/>
                                <a href="">More</a>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ maxWidth: "99%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="200"
                                image={VI1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    Research on Helping Visually Impaired
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    This work adopted auditory and tactile feedback to conduct a smartphone based platform with
                                    the design of artificial intelligence. The platform will realized the functions that help visually impaired
                                    people to practice certain types of mathematical problems by themselves. Also, it will be able to
                                    assist teachers in class with introduction and explaining mathematical concepts and questions.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <CodeIcon/>&nbsp;
                                <a href="">Code</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <SourceIcon/>
                                <a href="">Paper</a>
                                &nbsp;&nbsp;
                                <UnfoldMoreIcon/>
                                <a href="">More</a>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Research;