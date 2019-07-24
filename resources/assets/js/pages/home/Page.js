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
            isLoaded: false
        };
    }

    componentDidMount() {
        Http.post('api/front/get-page', {name: 'home'}).then(
            res => {
                this.setState({ isLoaded: true, data: JSON.parse(res.data.data) });
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="home-page">
                {this.state.isLoaded ?
                    <React.Fragment>
                        <div className="homepage-header" style={{ backgroundImage: `url(${data.header.header_url})` }}>
                            <Container className="custom-col-6">
                                <div className="homepage-header-description">
                                    <h1>{data.header.header_title}</h1>
                                    <p className="title">{data.header.header_description_title}</p>
                                    {
                                        data.header.header_description.split('\n').map(function (item, i) {
                                            return (
                                                <p key={i} className="normal">{item}</p>
                                            )
                                        })
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
                                            <ServiceItem url={data.services.desktop.url} type={data.services.desktop.type} title={data.services.desktop.title} color={data.services.desktop.color} description={data.services.desktop.description} backimage={data.services.desktop.backimage} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={data.services.mobile.url} type={data.services.mobile.type} title={data.services.mobile.title} color={data.services.mobile.color} description={data.services.mobile.description} backimage={data.services.mobile.backimage} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={4} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={data.services.ui.url} type={data.services.ui.type} title={data.services.ui.title} color={data.services.ui.color} description={data.services.ui.description} backimage={data.services.ui.backimage} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={data.services.branding.url} type={data.services.branding.type} title={data.services.branding.title} color={data.services.branding.color} description={data.services.branding.description} backimage={data.services.branding.backimage} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={data.services.illustration.url} type={data.services.illustration.type} title={data.services.illustration.title} color={data.services.illustration.color} description={data.services.illustration.description} backimage={data.services.illustration.backimage} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <ServiceItem url={data.services.marketing.url} type={data.services.marketing.type} title={data.services.marketing.title} color={data.services.marketing.color} description={data.services.marketing.description} backimage={data.services.marketing.backimage} />
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
                                            <BadgeTextCard url={data.badges.mapping.url} number={data.badges.mapping.number} title={data.badges.mapping.title} color={data.badges.mapping.color} description={data.badges.mapping.description} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={data.badges.estimation.url} number={data.badges.estimation.number} title={data.badges.estimation.title} color={data.badges.estimation.color} description={data.badges.estimation.description} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={data.badges.proposal.url} number={data.badges.proposal.number} title={data.badges.proposal.title} color={data.badges.proposal.color} description={data.badges.proposal.description} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={3} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={data.badges.design.url} number={data.badges.design.number} title={data.badges.design.title} color={data.badges.design.color} description={data.badges.design.description} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={data.badges.devlopment.url} number={data.badges.devlopment.number} title={data.badges.devlopment.title} color={data.badges.devlopment.color} description={data.badges.devlopment.description} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <BadgeTextCard url={data.badges.delivery.url} number={data.badges.delivery.number} title={data.badges.delivery.title} color={data.badges.delivery.color} description={data.badges.delivery.description} />
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
                                            <PortfolioCard from={data.portfolios.avollon.from} icon_url={data.portfolios.avollon.icon_url} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={data.portfolios.maora.from} icon_url={data.portfolios.maora.icon_url} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={data.portfolios.osg.from} icon_url={data.portfolios.osg.icon_url} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row columns={3} className="custom-row">
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={data.portfolios.attitude.from} icon_url={data.portfolios.attitude.icon_url} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={data.portfolios.proguiden.from} icon_url={data.portfolios.proguiden.icon_url} />
                                        </Grid.Column>
                                        <Grid.Column className="custom-column">
                                            <PortfolioCard from={data.portfolios.apotek.from} icon_url={data.portfolios.apotek.icon_url} />
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
                                <Gallery items={data.carousels} />
                            </Container>
                        </section>
                        <section className="home-section">
                            <Container className="custom-col-6">
                                <h3>Latest News</h3>
                                <Grid padded="horizontally">
                                    <Grid.Row columns={3} className="custom-row">
                                        {
                                            data.news.map(function (item, i) {
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
                        <PageFooter url={data.header.footer_url} />
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