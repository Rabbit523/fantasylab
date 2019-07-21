import React from 'react'
import { Button, Container, Grid, Header, Icon, Responsive, Dimmer, Segment, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import "react-table/react-table.css"
import Http from '../../../../Http'
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoaded: false
        }
        this.columns = [
            { Header: 'Name', accessor: 'page_name' }, { Header: 'Updated Date', accessor: 'updated_at' }
        ]
    }

    componentDidMount() {
        Http.post('/api/front/get-page', {name: 'home'}).then(
            res => {
                this.setState({ isLoaded: true, list: JSON.parse(res.data.data) });
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="admin-pages">
            {this.state.isLoaded ?
                <Segment vertical textAlign='center'>
                    <Container className="custom-col-6">
                    </Container>
                 </Segment>
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