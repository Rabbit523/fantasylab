import React from 'react'
import PropTypes from 'prop-types'

class ServiceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`${"service-item " + this.props.type}`}>
                <div className={`${"avatar-item " + this.props.type}`}>
                    <img src={`${ this.props.url}`} />
                </div>
                <div className="text-item">
                    <p>{this.props.title}</p>
                </div>
                <div className="text-description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

ServiceItem.propTypes = {
    url: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default ServiceItem;