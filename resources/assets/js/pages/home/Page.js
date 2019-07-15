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
import PageHeader from '../../common/pageHeader'
import PageFooter from '../../common/pageFooter'
import ServiceItem from '../../common/serviceItem'
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
            }
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
                <PageFooter url={this.state.footer_url} />
                <section className="divide"></section>
            </div>
        );
    }
}

export default Page;