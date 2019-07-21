import React from 'react'
import { Button, Container, Grid, Header, Icon, Responsive, Dimmer, Segment, Loader, List } from 'semantic-ui-react'
import ReactTable from 'react-table';
import { Link } from 'react-router-dom'
import "react-table/react-table.css"
import Http from '../../../Http'
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoading: false
        }
        this.columns = [
            { Header: 'Name', accessor: 'page_name' }, { Header: 'Updated Date', accessor: 'updated_at' }
        ]
    }

    componentDidMount() {
        Http.get('api/admin/pages').then(
            res => {
                console.log(res);
                this.setState({ isLoading: true, list: res.data });
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div style={{minHeight: '110vh', paddingTop: 70}}>
            {this.state.isLoading ?
                <Segment vertical textAlign='center'>
                    {/* <ReactTable data={this.state.list} columns={this.columns} defaultPageSize={10} className="-striped -highlight"/> */}
                    <Container className="custom-col-6">
                        <List divided relaxed>
                            <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as={Link} to="/admin/">Semantic-Org/Semantic-UI</List.Header>
                                <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                            </List.Item>
                        </List>
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