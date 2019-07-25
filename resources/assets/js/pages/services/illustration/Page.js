import React from 'react'
import { Button, Container, Grid, Header, Icon, Responsive, Segment, Step } from 'semantic-ui-react'

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Segment vertical textAlign='center' style={{minHeight: '100vh'}}>
                    <Header as='h1'>Illustration</Header>
                </Segment>
            </React.Fragment>
        );
    }
}

export default Page;