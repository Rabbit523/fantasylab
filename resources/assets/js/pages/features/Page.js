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

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <PageHeader heading="Features"/>
                <Segment vertical textAlign='center' style={{minHeight: '100vh'}}>
                    <Header as='h1'>Features</Header>
                </Segment>
            </React.Fragment>
        );
    }
}

export default Page;