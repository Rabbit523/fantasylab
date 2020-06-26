import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
class Page extends React.Component {    

    render() {
        return (
            <React.Fragment>
                <Segment vertical textAlign='center' style={{minHeight: '110vh', paddingTop: 70}}>
                    <Header as='h1'>Blogs</Header>
                </Segment>
            </React.Fragment>
        );
    }
}

export default Page;