import React from 'react'
import { Button, Container, Grid, Dimmer, Segment, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PageFooter from '../../common/pageFooter'
import ServiceItem from '../../common/serviceItem'
import BadgeTextCard from '../../common/badgeTextCard'
import PortfolioCard from '../../common/portfolioCard'
import Gallery from '../../common/carousel'
import NewsCard from '../../common/newsCard'
import Http from '../../Http'
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };
    }

    componentDidMount() {
        Http.get('api/front/homepage').then(
            res => {
                console.log(JSON.parse(res.data.data));
                this.setState({ isLoading: true, data: JSON.parse(res.data.data) });
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="home-page">
                {this.state.isLoading ?
                    <React.Fragment>
                        <div className="homepage-header" style={{ backgroundImage: `url(${this.state.data.header_url})` }}>
                            <Container className="custom-col-6">
                                <div className="homepage-header-description">
                                    <h1>{this.state.data.header_title}</h1>
                                    <p className="title">{this.state.data.header_description_title}</p>
                                    {
                                        this.state.data.header_description.length > 1 ?
                                            this.state.data.header_description.map(function (item, i) {
                                                return (
                                                    <p key={i} className="normal">{item}</p>
                                                )
                                            })
                                        :
                                        <p className="normal">{this.state.data.header_description}</p>
                                    }
                                    <div className="homepage-header-buttons">
                                        <Button as={Link} to="/register" replace compact
                                            className="register primary-button">Craft Enterprise</Button>
                                        <p>Existing user?<Link to="/login" className="item-link">Log in to FantasyLab</Link></p>
                                    </div>
                                </div>
                            </Container>
                        </div>
                        <section className="home-section">
                            <Container className="custom-col-6">
                                <h3>Services</h3>
                                <Grid padded="horizontally">
                                    <Grid.Row columns={2} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={this.state.data.services.desktop.url} type={this.state.data.services.desktop.type} title={this.state.data.services.desktop.title} color={this.state.data.services.desktop.color} description={this.state.data.services.desktop.description} backimage={this.state.data.services.desktop.backimage} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={this.state.data.services.mobile.url} type={this.state.data.services.mobile.type} title={this.state.data.services.mobile.title} color={this.state.data.services.mobile.color} description={this.state.data.services.mobile.description} backimage={this.state.data.services.mobile.backimage} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={4} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={this.state.data.services.ui.url} type={this.state.data.services.ui.type} title={this.state.data.services.ui.title} color={this.state.data.services.ui.color} description={this.state.data.services.ui.description} backimage={this.state.data.services.ui.backimage} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={this.state.data.services.branding.url} type={this.state.data.services.branding.type} title={this.state.data.services.branding.title} color={this.state.data.services.branding.color} description={this.state.data.services.branding.description} backimage={this.state.data.services.branding.backimage} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={this.state.data.services.illustration.url} type={this.state.data.services.illustration.type} title={this.state.data.services.illustration.title} color={this.state.data.services.illustration.color} description={this.state.data.services.illustration.description} backimage={this.state.data.services.illustration.backimage} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={this.state.data.services.marketing.url} type={this.state.data.services.marketing.type} title={this.state.data.services.marketing.title} color={this.state.data.services.marketing.color} description={this.state.data.services.marketing.description} backimage={this.state.data.services.marketing.backimage} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </section>
                        <section className="home-estimation">
                            <Container className="custom-col-6">
                                <div className="home-estimation-description">
                                    <h3>Estimation. Proposal. Delivery.</h3>
                                    <p>Don't get a goat. Get a quote.</p>
                                </div>
                                <Grid padded="horizontally">
                                    <Grid.Row columns={3} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={this.state.data.badges.mapping.url} number={this.state.data.badges.mapping.number} title={this.state.data.badges.mapping.title} color={this.state.data.badges.mapping.color} description={this.state.data.badges.mapping.description} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={this.state.data.badges.estimation.url} number={this.state.data.badges.estimation.number} title={this.state.data.badges.estimation.title} color={this.state.data.badges.estimation.color} description={this.state.data.badges.estimation.description} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={this.state.data.badges.proposal.url} number={this.state.data.badges.proposal.number} title={this.state.data.badges.proposal.title} color={this.state.data.badges.proposal.color} description={this.state.data.badges.proposal.description} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={3} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={this.state.data.badges.design.url} number={this.state.data.badges.design.number} title={this.state.data.badges.design.title} color={this.state.data.badges.design.color} description={this.state.data.badges.design.description} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={this.state.data.badges.devlopment.url} number={this.state.data.badges.devlopment.number} title={this.state.data.badges.devlopment.title} color={this.state.data.badges.devlopment.color} description={this.state.data.badges.devlopment.description} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={this.state.data.badges.delivery.url} number={this.state.data.badges.delivery.number} title={this.state.data.badges.delivery.title} color={this.state.data.badges.delivery.color} description={this.state.data.badges.delivery.description} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <div className="home-button-group">
                                    <Button as={Link} to="/register" replace compact className="primary-button">Craft Enterprise</Button>
                                    <Button as={Link} to="/login" replace compact className="secondary-button">Platform</Button>
                                </div>
                            </Container>
                        </section>
                        <section className="home-section">
                            <Container className="custom-col-6">
                                <h3>Portfolio</h3>
                                <Grid padded="horizontally">
                                    <Grid.Row columns={3} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.avollon.from} icon_url={this.state.data.portfolios.avollon.icon_url} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.maora.from} icon_url={this.state.data.portfolios.maora.icon_url} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.osg.from} icon_url={this.state.data.portfolios.osg.icon_url} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={3} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.attitude.from} icon_url={this.state.data.portfolios.attitude.icon_url} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.proguiden.from} icon_url={this.state.data.portfolios.proguiden.icon_url} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={this.state.data.portfolios.apotek.from} icon_url={this.state.data.portfolios.apotek.icon_url} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </section>
                        <section className="home-section">
                            <Container className="custom-col-6 home-review">
                                <h3>Choose excellence, always.</h3>
                                <p>The scrum Framework and an Agile mindset is paramount.</p>
                            </Container>
                            <Container className="custom-col-8">
                                <Gallery items={this.state.data.carousels} />
                            </Container>
                        </section>
                        <section className="home-section">
                            <Container className="custom-col-6">
                                <h3>Latest News</h3>
                                <Grid padded="horizontally">
                                    <Grid.Row columns={3} className="custom-row">
                                        {
                                            this.state.data.news.map(function (item, i) {
                                                return (
                                                    <Grid.Column key={i} className="custom-column">
                                                        <NewsCard url={item.url} author={item.author} type={item.type} title={item.title} description={item.description} time={item.time} read={item.read} />
                                                    </Grid.Column>
                                                )
                                            })
                                        }
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </section>
                        <PageFooter url={this.state.data.footer_url} />
                        <section className="divide"></section>
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