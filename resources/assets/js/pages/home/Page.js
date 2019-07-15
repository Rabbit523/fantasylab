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
import {Link} from 'react-router-dom'
import AuthService from '../../services'

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const social = this.props.match.params.social
        const params = this.props.location.search;

        setTimeout(function() { 

        if (params && social) {
            this.props.dispatch(AuthService.socialLogin({ params, social }))
                .catch(({error, statusCode}) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({responseError});
                this.setState({
                    isLoading: false
                });
            })
        }

        }.bind(this), 1000);
    }

    render() {
        return (
            <div style={{minHeight: '110vh', paddingTop: 70, background: '#03051b'}}>
                <div className="home-page-header">
                </div>
            </div>
        );
    }
}

export default Page;