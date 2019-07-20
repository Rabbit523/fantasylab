import React from 'react'
import { Container, Grid, Dimmer, Segment, Loader } from 'semantic-ui-react'
import PageFooter from '../../common/pageFooter'
import PortfolioCard from '../../common/portfolioCard'
import Http from '../../Http'
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        Http.get('api/front/portfoliopage').then(
            res => {
                this.setState({ isLoading: true, data: JSON.parse(res.data.data) });
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="portfolio-page">
                {this.state.isLoading ?
                    <React.Fragment>
                        <div className="portfolio-header" style={{backgroundImage: `url(${this.state.data.header_url})`}}>
                            <div className="header-gradient">
                                <Container className="custom-col-6">
                                    <div className="portfolio-header-description">
                                        <div className="portfolio-header-text">
                                            <h1>Portfolio</h1>
                                            <p>Leading companies use FantasyLab to transform their business by great design, development and communication.</p>
                                        </div>
                                        <div className="portfolio-header-figure">
                                            <div className="figure">
                                                <img src={`${ this.state.data.icon_urls.quality.path}`} />
                                                <p>{this.state.data.icon_urls.quality.text}</p>
                                            </div>
                                            <div className="figure">
                                                <img src={`${ this.state.data.icon_urls.time.path}`} />
                                                <p>{this.state.data.icon_urls.time.text}</p>
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
                                            <PortfolioCard from={this.state.data.portfolios.avollon.from} title={this.state.data.portfolios.avollon.title} description={this.state.data.portfolios.avollon.description}/>
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.maora.from} title={this.state.data.portfolios.maora.title} description={this.state.data.portfolios.maora.description}/>
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.osg.from} title={this.state.data.portfolios.osg.title} description={this.state.data.portfolios.osg.description}/>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={3} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.attitude.from} title={this.state.data.portfolios.attitude.title} description={this.state.data.portfolios.attitude.description}/>
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.proguiden.from} title={this.state.data.portfolios.proguiden.title} description={this.state.data.portfolios.proguiden.description}/>
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.apotek.from} title={this.state.data.portfolios.apotek.title} description={this.state.data.portfolios.apotek.description}/>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={3} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.insurance.from} title={this.state.data.portfolios.insurance.title} description={this.state.data.portfolios.insurance.description}/>
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.consulting.from} title={this.state.data.portfolios.consulting.title} description={this.state.data.portfolios.consulting.description}/>
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.ibobil.from} title={this.state.data.portfolios.ibobil.title} description={this.state.data.portfolios.ibobil.description}/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </div>
                        <PageFooter url={this.state.data.footer_url} />
                        <div className="divide"></div>
                    </React.Fragment>
                    :
                    <Segment className='page-loader'>
                        <Dimmer active inverted>
                            <Loader size='large'>Loading...</Loader>
                        </Dimmer>
                    </Segment>
                }
            </div>
            
        );
    }
}

export default Page;