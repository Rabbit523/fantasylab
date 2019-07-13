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
                    <Menu.Item as='a'>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='gamepad' />
                        Games
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='camera' />
                        Channels
                    </Menu.Item>
                </Sidebar>
            </div>
        );
    }
}

export default AdminSidebar;