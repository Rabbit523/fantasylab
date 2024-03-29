import React from 'react'
import { Container, Grid, Dimmer, Segment, Loader, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PageFooter from '../../common/pageFooter'
import ServiceItem from '../../common/serviceItem'

class Page extends React.Component {

    render() {
        let data = this.props.page;
        let isExisted = false;
        if (data.header_description != 'example') {
            isExisted = true;
        } else {
            isExisted = false;
        }
        return (
            <div className='singlePortfolio-page'>
                {isExisted?
                    <React.Fragment>
                        <div className='singlePortfolio-header' style={{ backgroundImage: `url(${data.header_back_url})` }}>
                            <div className='header-gradient'>
                                <Container className='custom-col-6'>
                                    <div className='header-description'>
                                        <div className='header-text'>
                                            <h2>{data.title}</h2>
                                            <p>{data.header_description}</p>
                                        </div>
                                    </div>
                                    <div className="image-group">
                                        <img src={`${ data.header_sub_images[0] }`} />
                                        { data.header_sub_images[1] != null && (<img src={`${ data.header_sub_images[1] }`} className="sub-img" /> )}
                                    </div>
                                </Container>
                            </div>
                        </div>
                        {data.main_description.length > 0 && <section className='portfolio-section'>
                            <Container className='custom-col-6'>
                                <Grid columns={3}>
                                    {data.main_description.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <Grid.Column mobile={16} tablet={16} only="mobile" className="main_description">
                                                <h3 className="sub_title">{item.title}</h3>
                                                <p className="sub_text">{item.text}</p>
                                                {Object.keys(item.sub).map((key, i) => (
                                                    item.sub[key] && (<div className="sub_descriptions" key={i}>
                                                        <div className="round_number">{i+1}</div>
                                                        <p>{item.sub[key]}</p>
                                                    </div>)
                                                ))}
                                            </Grid.Column>
                                            <Grid.Column only="computer" className="main_description">
                                                <h3 className="sub_title">{item.title}</h3>
                                                <p className="sub_text">{item.text}</p>
                                                {Object.keys(item.sub).map((key, i) => (
                                                    item.sub[key] && (<div className="sub_descriptions" key={i}>
                                                        <div className="round_number">{i+1}</div>
                                                        <p>{item.sub[key]}</p>
                                                    </div>)
                                                ))}
                                            </Grid.Column>
                                        </React.Fragment>
                                    ))}
                                </Grid>
                            </Container>
                        </section>}
                        <section className="portfolio-section">
                            <Container className='custom-col-6'>
                                {data.sub_images.map((item, index) => (
                                    <div className="subImage" key={index}>
                                        <img src={`${ item.url }`} />
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </Container>
                        </section>
                        {data.reviews[0] && <section className='portfolio-section review' style={{backgroundImage: `url(${data.reviews[0].back_url})`}}>
                            <Container className="custom-col-6">
                                <div className="review-item">
                                    <div className="review-text-section">
                                        <img src={`${ data.reviews[0].logo_url }`} />
                                        <div className='description'>{data.reviews[0].description}</div>
                                        <hr/>
                                    </div>
                                    <div className="review-avatar">
                                        <img src={data.reviews[0].avatar?`${ data.reviews[0].avatar }`:'/images/default-user.png'} />
                                        <div className='icon-quote-right'>
                                            <Icon name='quote right'/>
                                        </div>
                                    </div>
                                    <div className="review-personal">
                                        <p className='name'>{data.reviews[0].name}</p>
                                        <p>{data.reviews[0].job}</p>
                                    </div>
                                </div>
                            </Container>
                        </section>}
                        <section className='portfolio-section scope'>
                            <Container className='custom-col-6 service'>
                                <h2>Scope of the project</h2>
                                <Grid columns={3}>
                                    {data.services.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <Grid.Column mobile={16} tablet={8} only="mobile" as={Link} to={{ pathname: `/${item.url}` }}>
                                                <ServiceItem avatar={item.avatar} title={item.title} color={item.color} description={item.description} backimage={item.backimage} />
                                            </Grid.Column>
                                            <Grid.Column only="computer" as={Link} to={{ pathname: `/${item.url}` }}>
                                                <ServiceItem avatar={item.avatar} title={item.title} color={item.color} description={item.description} backimage={item.backimage} />
                                            </Grid.Column>
                                        </React.Fragment>
                                    ))}
                                </Grid>
                            </Container>
                        </section>
                        {data.footer_url && (<PageFooter title={data.footer_title} description={data.footer_description} button={data.footer_button} link={data.footer_link} linkName={data.footer_link_name} url={data.footer_url} />)}
                        <div className='divide'></div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <h1 className="alert-notice">Page is not ready yet.</h1>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Page;