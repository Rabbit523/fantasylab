/**
 * Created by Sumit-Yadav on 12-10-2017.
 */
import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    List,
    Segment,
    Responsive
} from 'semantic-ui-react'

import { NavLink, Link } from 'react-router-dom'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <Responsive style={{ margin: 0, borderRadius: '0', padding: 0 }}
                    minWidth={769}>
                    <Container className="custom-col-8">
                        <Grid className="foobar" stackable>
                            <Grid.Row style={{paddingBottom: 50, paddingTop: 30}} columns={5}>
                                <Grid.Column>
                                    <div className="footer-title service">
                                        <p>Services</p>
                                    </div>
                                    <div className="footer-item">
                                        <p>Web Development</p>
                                        <p>Mobile Development</p>
                                        <p>UI/UX Design</p>
                                        <p>Branding</p>
                                        <p>Illustration</p>
                                        <p>Marketing</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="footer-title platform">
                                        <p>Platform</p>
                                    </div>
                                    <div className="footer-item">
                                        <p>Creatives</p>
                                        <p>Features</p>
                                        <p>Portfolio</p>
                                        <p>Pricing</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="footer-title company">
                                        <p>Company</p>
                                    </div>
                                    <div className="footer-item">
                                        <p>About us</p>
                                        <p>Blog</p>
                                        <p>Contact</p>
                                        <p>Facebook</p>
                                        <p>Instagram</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="footer-title started">
                                        <p>Get Started</p>
                                    </div>
                                    <div className="footer-item">
                                        <p>Start a project</p>
                                        <Link to="/login" className="item-link">Log in</Link>
                                        <Link to="/register" className="item-link">Sign up</Link>
                                        <p>Apply as Designer</p>
                                        <p>Apply as Developer</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="footer-title legal">
                                        <p>Legal</p>
                                    </div>
                                    <div className="footer-item">
                                        <p>Privacy</p>
                                        <p>Security</p>
                                        <p>Terms</p>
                                        <p>Confidentiality</p>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <img src={require('../../images/theme/logo.png')} alt="infoTiq" />
                                </Grid.Column>
                                <Grid.Column textAlign='right'>
                                    <h5>© + TM 2019 FantasyLab AS, NO 914 798 493 MVA</h5>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Responsive>
            </div>
        );
    }
}

export default Footer;