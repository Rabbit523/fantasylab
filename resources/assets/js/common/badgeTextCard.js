import React from 'react'
import PropTypes from 'prop-types'

class BadgeTextCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="badge-item">
                <div className="badge">
                    <img src={`${ this.props.url}`} />
                    <p>{this.props.number}</p>
                </div>
                <div className="badge-title">
                    <p>{this.props.title}</p>
                </div>
                <div className="badge-description">
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

BadgeTextCard.propTypes = {
    url: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default BadgeTextCard;