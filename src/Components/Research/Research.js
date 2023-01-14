import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import SourceIcon from '@mui/icons-material/Source';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const Research = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Card sx={{ maxWidth: "98%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    HNOXPred
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    Content
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
                                <a href="">Learn More</a>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ maxWidth: "98%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    Infectious Disease Simulation Model
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
                                <a href="">Learn More</a>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ maxWidth: "98%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
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
                                <a href="">Learn More</a>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card sx={{ maxWidth: "98%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    CNN for Visual Recognition
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
                                <a href="">Learn More</a>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ maxWidth: "98%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    Research 5
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    Content
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
                                <a href="">Learn More</a>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col">
                        <Card sx={{ maxWidth: "98%", marginTop: "3%", marginBottom: "3%" }}>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="text" component="div">
                                    Research 6
                                </Typography>
                                <Typography variant="text" color="text.secondary">
                                    Content
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
                                <a href="">Learn More</a>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Research;