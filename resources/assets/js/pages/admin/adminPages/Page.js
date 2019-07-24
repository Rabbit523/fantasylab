import React from 'react'
import { Button, Container, Grid, Header, Icon, Responsive, Dimmer, Segment, Loader, List } from 'semantic-ui-react'
// import ReactTable from 'react-table';
import { Link } from 'react-router-dom'
// import "react-table/react-table.css"
import Http from '../../../Http'
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
        Http.get('/api/admin/pages').then(
            res => {
                this.setState({ isLoaded: true, list: res.data });
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
                    {/* <ReactTable data={this.state.list} columns={this.columns} defaultPageSize={10} className="-striped -highlight"/> */}
                    <Container className="custom-col-6">
                        <List selection divided relaxed>
                            { this.state.list.map(function (item, i) {
                                    return (
                                        <List.Item key={i}>
                                            <List.Icon name='github' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header as={Link} to={`/admin/single-page/${item.page_name}`}>{item.page_name}</List.Header>
                                                <List.Description as='a'>Updated at {item.updated_at}</List.Description>
                                            </List.Content>
                                        </List.Item>
                                    )
                                })
                            }
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