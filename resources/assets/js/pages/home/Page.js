import React from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PageHeader from '../../common/pageHeader'
import PageFooter from '../../common/pageFooter'
import ServiceItem from '../../common/serviceItem'
import BadgeTextCard from '../../common/badgeTextCard'
import AuthService from '../../services'
class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header_url: '/images/home-header-back.png',
            header_title: 'Welcome',
            footer_url: '/images/home-footer-back.png',
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
                <PageHeader url={this.state.header_url} title={this.state.header_title} />
                <section className="home-services">
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
                <PageFooter url={this.state.footer_url} />
                <section className="divide"></section>
            </div>
        );
    }
}

export default Page;