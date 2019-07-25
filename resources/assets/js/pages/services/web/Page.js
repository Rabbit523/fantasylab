import React from 'react'
import { Button, Container, Grid, Dimmer, Segment, Loader } from 'semantic-ui-react'
import Http from '../../../Http'
import PageFooter from '../../../common/pageFooter'
import ServiceItem from '../../../common/serviceItem'
import GuideCard from '../../../common/guideCard'
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }
    
    componentDidMount() {
        Http.post('api/front/get-page', {name: 'serviceWeb'}).then(
            res => {
                var data = {
                    header_url: "/images/about-header-back.png",
                    footer_url: "/images/home-footer-back.png",
                    title: "Web Development",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    icons: [
                        {
                            icon: "/images/design_dev.png",
                            text: "Design and Development"
                        },
                        {
                            icon: "/images/quality.png",
                            text: "Testing and Quality Assurance"
                        },
                        {
                            icon: "/images/measurement.png",
                            text: "Measurement and Data Analyzation"
                        }
                    ],
                    starting: [
                        {
                            url: "/images/web_site.png",
                            title: "Website",
                            description: "",
                            backimage: "",
                            color: "#7436e9"
                        },
                        {
                            url: "/images/ecommerce.png",
                            title: "Ecommerce",
                            description: "Lorem Ipsum is simply dummy text of the printing",
                            backimage: "/images/ecommerce_back.png",
                            color: "#7436e9"
                        },
                        {
                            url: "/images/web_app.png",
                            title: "Web App",
                            description: "",
                            backimage: "",
                            color: "#7436e9"
                        }
                    ],
                    study: {
                        title: "Web develpment for a headhunter platform",
                        description: "The team in FantasyLab is highly competent and distinguishes itself through flexibility, speed and good understanding of the users. They are nice to work with.",
                        avatar: "/images/maora_avatar.jpg",
                        job: "Cato Backer, CEO at Avollon AS",
                        backimage: "/images/development-study-back.png"
                    },
                    technologies: [
                        {
                            icon: "/images/angular.png",
                            lang: "Angular.js",
                            text: "4 projects"
                        },
                        {
                            icon: "/images/vue.png",
                            lang: "Vue.js",
                            text: "2 projects"
                        },
                        {
                            icon: "/images/react.png",
                            lang: "React.js",
                            text: "1 projects"
                        },
                        {
                            icon: "/images/node.png",
                            lang: "Node.js",
                            text: "3 projects"
                        },
                        {
                            icon: "/images/sass.png",
                            lang: "Sass",
                            text: "15+ projects"
                        },
                        {
                            icon: "/images/wordpress.png",
                            lang: "Wordpress",
                            text: "20+ projects"
                        },
                        {
                            icon: "/images/laravel.png",
                            lang: "Laravel",
                            text: "10+ projects"
                        },
                        {
                            icon: "/images/asp_net.png",
                            lang: "ASP.NET",
                            text: "2 projects"
                        }
                    ],
                    estimation: [
                        {
                            color: "#7436e9",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            number: "1",
                            title: "Mapping of requirements",
                            url: "/images/purple-badge.png"
                        },
                        {
                            color: "#f34cb5",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            number: "2",
                            title: "Estimation",
                            url: "/images/pink-badge.png"
                        },                        
                        {
                            color: "#f3a864",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            number: "3",
                            title: "Propsal & acceptance",
                            url: "/images/orange-badge.png"
                        },
                        {
                            color: "#e4cb0d",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            number: "4",
                            title: "Design process",
                            url: "/images/yellow-badge.png"
                        },
                        {
                            color: "#90ce41",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            number: "5",
                            title: "Development process",
                            url: "/images/blue-badge.png"
                        },
                        {
                            color: "#90ce41",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            number: "6",
                            title: "Delivery",
                            url: "/images/green-badge.png"
                        }
                    ]
                };
                this.setState({ isLoaded: true, data: data });
                // this.setState({ isLoaded: true, data: JSON.parse(res.data.data) });
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {
        const {data} = this.state;
        return (
            <div className="service-page">
                {this.state.isLoaded ?
                    <React.Fragment>
                        <div className="service-header" style={{backgroundImage: `url(${data.header_url})`}}>
                            <div className="header-gradient">
                                <Container className="custom-col-6">
                                    <div className="header-description">
                                        <div className="header-text">
                                            <h1>{data.title}</h1>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                    <Container className="custom-col-6">
                                        <div className="figures">
                                            {data.icons.map((item, i) => (
                                                <div className="figure" key={i}>
                                                    <img src={`${ item.icon}`} />
                                                    <p>{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </Container>
                                </Container>
                                <div className="starter-group">
                                    <Container className="custom-col-6">
                                        <h2>Let's start. What do you need?</h2>
                                        <Container className="custom-col-6">
                                            <Grid padded="horizontally">
                                                <Grid.Row columns={3} className="custom-row">
                                                    {data.starting.map((item, i) => (
                                                        <Grid.Column className="custom-column" key={i}>
                                                            <ServiceItem from="service" url={item.url} backimage={item.backimage} color={item.color} title={item.title} description={item.description}/>
                                                        </Grid.Column>
                                                    ))}
                                                </Grid.Row>
                                            </Grid>
                                        </Container>
                                    </Container>
                                </div>
                            </div>
                        </div>
                        <div className="service-section" style={{ background: `url(${data.study.backimage}) no-repeat center`, backgroundSize: '100% 100%', minHeight: '100vh'}}>
                            <Container className="custom-col-6">
                                <div className="service-review">
                                    <p>CASE STUDY</p>
                                    <h1>{data.study.title}</h1>
                                    <p>"{data.study.description}"</p>
                                    <img src={`${ data.study.avatar}`} />
                                    <p>{data.study.job}</p>
                                    <Button className="third_button">Read case study</Button>
                                </div>
                            </Container>
                        </div>
                        <div className="service-section">
                            <h3>Technologies we excel at</h3>
                            <Container className="custom-col-6">
                                <Container className="custom-col-8">
                                    <Grid padded="horizontally">
                                        <Grid.Row className="custom-row" columns={4}>
                                            {data.technologies.map(function(item, i) {
                                                return (
                                                    <React.Fragment  key={i}>
                                                        {i<4 && 
                                                            <Grid.Column className="custom-column">
                                                                <GuideCard from="service" avatar={item.icon} title={item.lang} description={item.text}/>
                                                            </Grid.Column>}
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Grid.Row>
                                        <Grid.Row className="custom-row" columns={4}>
                                            {data.technologies.map(function(item, i) {
                                                return (
                                                    <React.Fragment  key={i}>
                                                        {i>=4 && 
                                                            <Grid.Column className="custom-column">
                                                                <GuideCard from="service" avatar={item.icon} title={item.lang} description={item.text}/>
                                                            </Grid.Column>}
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Grid.Row>
                                    </Grid>
                                </Container>
                            </Container>
                        </div>
                        <PageFooter url={data.footer_url} />
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