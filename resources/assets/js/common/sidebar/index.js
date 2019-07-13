import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'

class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                 <Sidebar
                    as={Menu}
                    animation='push'
                    direction='left'
                    icon='labeled'
                    inverted
                    vertical
                    visible={true}
                    width='thin'
                    className="admin-sidebar"
                >
                    <Menu.Item as='a'> <Icon name='home' /> Home </Menu.Item>
                    <Menu.Item as='a'> <Icon name='gamepad' /> Portfolio </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> Features </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> About </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> Blog </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> Contact </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> Web Development </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> Mobile Development </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> UI & UX design </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> Branding </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> Illustration </Menu.Item>
                    <Menu.Item as='a'> <Icon name='camera' /> Marketing </Menu.Item>
                </Sidebar>
            </div>
        );
    }
}

export default AdminSidebar;