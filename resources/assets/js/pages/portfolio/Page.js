import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Responsive,
    Segment,
    Step
} from 'semantic-ui-react'
import PageFooter from '../../common/pageFooter'
import PortfolioCard from '../../common/portfolioCard'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header_url: '/images/portfolio-header-back.png',
            footer_url: '/images/home-footer-back.png',
            icon_urls: {
                quality: '/images/quality.png',
                time: '/images/time.png'
            },
            portfolios: {
                'avollon': {
                    from: 'portfolio',
                    title: 'Website for Avollon',
                    description: 'Web Development'
                },
                'osg': {
                    from: 'portfolio',
                    title: 'Web & Mobile App for OSG',
                    description: 'Web & Mobile Development'
                },
                'attitude': {
                    from: 'portfolio',
                    title: 'Website for Attitude',
                    description: 'Web Development'
                },
                'proguiden': {
                    from: 'portfolio',
                    title: 'Web App for Proguiden',
                    description: 'UI & UX Design, Web development'
                },
                'maora': {
                    from: 'portfolio',
                    title: 'Branding for MAORA',
                    description: 'Branding, UI & UX Design'
                },
                'apotek': {
                    from: 'portfolio',
                    title: 'ePharmacy for 123Apotek',
                    description: 'UI & UX Design, Web development'
                },
                'insurance': {
                    from: 'portfolio',
                    title: 'Insurance Website',
                    description: 'UI & UX Design'
                },
                'consulting': {
                    from: 'portfolio',
                    title: 'consulting Web App',
                    description: 'UI & UX Design'
                },
                'ibobil': {
                    from: 'portfolio',
                    title: 'Website for iBobil',
                    description: 'Web development'
                }
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="portfolio-page">
                    <div className="portfolio-header" style={{backgroundImage: `url(${this.state.header_url})`}}>
                        <div className="header-gradient">
                            <Container className="custom-col-6">
                                <div className="portfolio-header-description">
                                    <div className="portfolio-header-text">
                                        <h1>Portfolio</h1>
                                        <p>Leading companies use FantasyLab to transform their business by great design, development and communication.</p>
                                    </div>
                                    <div className="portfolio-header-figure">
                                        <div className="figure">
                                            <img src={`${ this.state.icon_urls.quality}`} />
                                            <p>High quality<br></br>projects</p>
                                        </div>
                                        <div className="figure">
                                            <img src={`${ this.state.icon_urls.time}`} />
                                            <p>Delivery on time <br></br>and budget</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="portfolio-studios">
                        <Container className="custom-col-6">
                            <h2>Case studios</h2>
                            <Grid padded="horizontally">
                                <Grid.Row columns={3} className="custom-row">
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.avollon.from} title={this.state.portfolios.avollon.title} description={this.state.portfolios.avollon.description}/>
                                    </Grid.Column>
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.maora.from} title={this.state.portfolios.maora.title} description={this.state.portfolios.maora.description}/>
                                    </Grid.Column>
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.osg.from} title={this.state.portfolios.osg.title} description={this.state.portfolios.osg.description}/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={3} className="custom-row">
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.attitude.from} title={this.state.portfolios.attitude.title} description={this.state.portfolios.attitude.description}/>
                                    </Grid.Column>
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.proguiden.from} title={this.state.portfolios.proguiden.title} description={this.state.portfolios.proguiden.description}/>
                                    </Grid.Column>
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.apotek.from} title={this.state.portfolios.apotek.title} description={this.state.portfolios.apotek.description}/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={3} className="custom-row">
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.insurance.from} title={this.state.portfolios.insurance.title} description={this.state.portfolios.insurance.description}/>
                                    </Grid.Column>
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.consulting.from} title={this.state.portfolios.consulting.title} description={this.state.portfolios.consulting.description}/>
                                    </Grid.Column>
                                    <Grid.Column className="custom-column">
                                        <PortfolioCard from={this.state.portfolios.ibobil.from} title={this.state.portfolios.ibobil.title} description={this.state.portfolios.ibobil.description}/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </div>
                    <PageFooter url={this.state.footer_url} />
                    <div className="divide"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Page;