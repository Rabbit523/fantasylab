import React from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PageFooter from '../../common/pageFooter'
import ServiceItem from '../../common/serviceItem'
import BadgeTextCard from '../../common/badgeTextCard'
import PortfolioCard from '../../common/portfolioCard'
import Gallery from '../../common/carousel'
import NewsCard from '../../common/newsCard'
import AuthService from '../../services'
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header_url: '../images/home-header-back.png',
            header_title: 'Welcome',
            footer_url: '../images/home-footer-back.png',
            services: {
                'desktop': {
                    type: 'desktop',
                    url: '../images/desktop.png',
                    color: '#7436e9',
                    title: 'Web Development',
                    description: ''
                },
                'mobile': {
                    type: 'mobile',
                    url: '../images/mobile.png',
                    color: '#f34cb5',
                    title: 'Mobile Development',
                    description: 'Lorem ipsum dolor sit amet constatur ipsum'
                },
                'ui': {
                    type: 'ui',
                    url: '../images/ui.png',
                    color: '#f3a864',
                    title: 'UI & UX',
                    description: ''
                },
                'branding': {
                    type: 'branding',
                    url: '../images/branding.png',
                    color: '#e4cb0d',
                    title: 'Branding',
                    description: ''
                },
                'illustration': {
                    type: 'illustration',
                    url: '../images/illustration.png',
                    color: '#90ce41',
                    title: 'Illustration',
                    description: ''
                },
                'marketing': {
                    type: 'marketing',
                    url: '../images/marketing.png',
                    color: '#90ce41',
                    title: 'Material',
                    description: ''
                }
            },
            badges: {
                'mapping': {
                    number: '1',
                    url: '../images/purple-badge.png',
                    color: '#7436e9',
                    title: 'Mapping of requirements',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                'estimation': {
                    number: '2',
                    url: '../images/pink-badge.png',
                    color: '#f34cb5',
                    title: 'Estimation',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                'proposal': {
                    number: '3',
                    url: '../images/orange-badge.png',
                    color: '#f3a864',
                    title: 'Propsal & acceptance',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                'design': {
                    number: '4',
                    url: '../images/yellow-badge.png',
                    color: '#e4cb0d',
                    title: 'Design process',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                'devlopment': {
                    number: '5',
                    url: '../images/blue-badge.png',
                    color: '#90ce41',
                    title: 'Development process',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                'delivery': {
                    number: '6',
                    url: '../images/green-badge.png',
                    color: '#90ce41',
                    title: 'Delivery',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }
            },
            portfolios: {
                'avollon': {
                    from: 'home',
                    icon_url: '../images/avollon.png'
                },
                'osg': {
                    from: 'home',
                    icon_url: '../images/osg.png'
                },
                'proguiden': {
                    from: 'home',
                    icon_url: '../images/proguiden.png'
                },
                'attitude': {
                    from: 'home',
                    icon_url: '../images/attitude.png'
                },
                'maora': {
                    from: 'home',
                    icon_url: '../images/maora.png'
                },
                'apotek': {
                    from: 'home',
                    icon_url: '../images/123apotek.png'
                }
            },
            carousels: [
                {
                    avatar: "../images/avollon_avatar.jpg",
                    name: "Cate Backer",
                    description: "The team in FantasyLab is highly competent and distinguishes itself through flexibility, speed and good understanding of the users. They are nice to work with.",
                    job: "CEO, Avollon AS"
                },
                {
                    avatar: "../images/maora_avatar.jpg",
                    name: "Maora-Iren Mahgoub",
                    description: "FantasyLab is outstanding! Collaboration couldn't be better. They are passionate about delivering a result that both the customer and they themselves can be proud of.",
                    job: "CEO, MAORA AS"
                },
                {
                    avatar: "../images/accessoslo_avatar.jpg",
                    name: "Aleksander Aaland",
                    description: "FantasyLab does an incredibly good job, are quick to respond and make changes when needed. We never get a no, they always find a solution for us.",
                    job: "CEO, Access Oslo AS"
                },
                ,
                {
                    avatar: "../images/apotek_avatar.jpg",
                    name: "Jane Merry",
                    description: "FantasyLab does an incredibly good job, are quick to respond and make changes when needed. We never get a no, they always find a solution for us.",
                    job: "CEO, Apotek"
                }
            ],
            news: [
                {
                    url: '../images/agile-news.jpg',
                    author: 'Nohman Janjua',
                    type: 'Design',
                    title: 'The Agile Principles',
                    description: '',
                    time: '5 min ago',
                    read: '5 min'
                },
                {
                    url: '../images/ui-news.jpg',
                    author: 'Farhood Gandomani',
                    type: 'Business',
                    title: 'UX Design Strategy',
                    description: 'Lorem lpsum is simply dummy text',
                    time: '25.03.19',
                    read: '5 min'
                },
                {
                    url: '../images/wordpress-news.jpg',
                    author: 'Nohman Janjua',
                    type: 'Wordpress',
                    title: 'WordPress Pros and Cons',
                    description: '',
                    time: '25.03.19',
                    read: '5 min'
                }
            ]
        };
    }

    componentDidMount() {
        const social = this.props.match.params.social
        const params = this.props.location.search;

        setTimeout(function () {

            if (params && social) {
                this.props.dispatch(AuthService.socialLogin({ params, social }))
                    .catch(({ error, statusCode }) => {
                        const responseError = {
                            isError: true,
                            code: statusCode,
                            text: error
                        };
                        this.setState({ responseError });
                        this.setState({
                            isLoading: false
                        });
                    })
            }

        }.bind(this), 1000);
    }

    render() {
        return (
            <div className="home-page">
                <div className="homepage-header" style={{backgroundImage: `url(${this.state.header_url})`}}>
                    <Container className="custom-col-6">
                        <div className="homepage-header-description">
                            <h1>Welcome,</h1>
                            <h1>Visionaries.</h1>
                            <p className="title">enterprise</p>
                            <p className="normal">/entərˌprīz</p>
                            <p className="normal">noun</p>
                            <p className="normal">1. a project or undertalking, especiaaly a bold or complex orange
                                "a joint enterprise between adventureful companies"
                                synonyms: artifical intelligence, information technology, company, ventrue, automation, product, industry, UI & UX design, app development, business
                            </p>
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
                                    <ServiceItem url={this.state.services.desktop.url} type={this.state.services.desktop.type} title={this.state.services.desktop.title} color={this.state.services.desktop.color} description={this.state.services.desktop.description} />
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <ServiceItem url={this.state.services.mobile.url} type={this.state.services.mobile.type} title={this.state.services.mobile.title} color={this.state.services.mobile.color} description={this.state.services.mobile.description} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={4} className="custom-row">
                                <Grid.Column className="custom-column">
                                    <ServiceItem url={this.state.services.ui.url} type={this.state.services.ui.type} title={this.state.services.ui.title} color={this.state.services.ui.color} description={this.state.services.ui.description} />
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <ServiceItem url={this.state.services.branding.url} type={this.state.services.branding.type} title={this.state.services.branding.title} color={this.state.services.branding.color} description={this.state.services.branding.description} />
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <ServiceItem url={this.state.services.illustration.url} type={this.state.services.illustration.type} title={this.state.services.illustration.title} color={this.state.services.illustration.color} description={this.state.services.illustration.description} />
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <ServiceItem url={this.state.services.marketing.url} type={this.state.services.marketing.type} title={this.state.services.marketing.title} color={this.state.services.marketing.color} description={this.state.services.marketing.description} />
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
                                    <BadgeTextCard url={this.state.badges.mapping.url} number={this.state.badges.mapping.number} title={this.state.badges.mapping.title} color={this.state.badges.mapping.color} description={this.state.badges.mapping.description} />
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <BadgeTextCard url={this.state.badges.estimation.url} number={this.state.badges.estimation.number} title={this.state.badges.estimation.title} color={this.state.badges.estimation.color} description={this.state.badges.estimation.description} />
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <BadgeTextCard url={this.state.badges.proposal.url} number={this.state.badges.proposal.number} title={this.state.badges.proposal.title} color={this.state.badges.proposal.color} description={this.state.badges.proposal.description} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={3} className="custom-row">
                                <Grid.Column className="custom-column">
                                    <BadgeTextCard url={this.state.badges.design.url} number={this.state.badges.design.number} title={this.state.badges.design.title} color={this.state.badges.design.color} description={this.state.badges.design.description} />
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <BadgeTextCard url={this.state.badges.devlopment.url} number={this.state.badges.devlopment.number} title={this.state.badges.devlopment.title} color={this.state.badges.devlopment.color} description={this.state.badges.devlopment.description} />
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <BadgeTextCard url={this.state.badges.delivery.url} number={this.state.badges.delivery.number} title={this.state.badges.delivery.title} color={this.state.badges.delivery.color} description={this.state.badges.delivery.description} />
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
                                    <PortfolioCard from={this.state.portfolios.avollon.from} icon_url={this.state.portfolios.avollon.icon_url}/>
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <PortfolioCard from={this.state.portfolios.maora.from} icon_url={this.state.portfolios.maora.icon_url}/>
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <PortfolioCard from={this.state.portfolios.osg.from} icon_url={this.state.portfolios.osg.icon_url}/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={3} className="custom-row">
                                <Grid.Column className="custom-column">
                                    <PortfolioCard from={this.state.portfolios.attitude.from} icon_url={this.state.portfolios.attitude.icon_url}/>
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <PortfolioCard from={this.state.portfolios.proguiden.from} icon_url={this.state.portfolios.proguiden.icon_url}/>
                                </Grid.Column>
                                <Grid.Column className="custom-column">
                                    <PortfolioCard from={this.state.portfolios.apotek.from} icon_url={this.state.portfolios.apotek.icon_url}/>
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
                        <Gallery items={this.state.carousels}/>
                    </Container>
                </section>
                <section className="home-section">
                    <Container className="custom-col-6">
                        <h3>Latest News</h3>
                        <Grid padded="horizontally">
                            <Grid.Row columns={3} className="custom-row">
                            {
                                this.state.news.map(function(item, i){
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
                <PageFooter url={this.state.footer_url} />
                <section className="divide"></section>
            </div>
        );
    }
}

export default Page;