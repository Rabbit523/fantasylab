import React from 'react'
import { Container, Grid, Dimmer, Segment, Loader } from 'semantic-ui-react'
import HeadquaterItem from '../../common/headQuaterItem'
import Http from '../../Http'
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        Http.post('api/front/get-page', {name: 'contact'}).then(
            res => {
                this.setState({ isLoaded: true, data: JSON.parse(res.data.data) });
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {
        const {data} = this.state;
        return (
            <div className="contact-page">
                {this.state.isLoaded ?
                    <React.Fragment>
                        <div className="contact-header" style={{backgroundImage: `url(${data.header_url})`}}>
                            <div className="header-gradient">
                                <Container className="custom-col-6">
                                    <div className="header-description">
                                        <div className="header-text">
                                            <h1>{data.title}</h1>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                    <Grid padded="horizontally" style={{paddingTop: 70}}>
                                        <Grid.Row columns={4} className="custom-row">
                                            {data.headquarters.map((item, i) => (
                                                <Grid.Column className="custom-column" key={i}>
                                                    <HeadquaterItem avatar={item.avatar} button={item.button} title={item.title} description={item.description} />
                                                </Grid.Column>
                                            ))}
                                        </Grid.Row>
                                    </Grid>
                                </Container>
                            </div>
                        </div>
                        <div className="contact-section">
                            <Container className="custom-col-6">
                            </Container>
                        </div>
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