import React from 'react'
import PropTypes from 'prop-types'
import ReactHoverObserver from 'react-hover-observer';

const hoverStyle = {
    borderBottom: '2px solid #8341ff',
    cursor: 'pointer'
};
const serviceStyle = {
    display: "inline-block",
    width: 100,
    height: 80
}
const aboutStyle = {
    display: "inline-block",
    width: 50,
    height: 50,
    marginBottom: 20
}
class GuideCard extends React.Component {
    render() {        
        return (
            <ReactHoverObserver className='guide-card-observer'>
                {({ isHovering }) => (
                    <div className={this.props.from?"guide-card service":"guide-card"} style={isHovering?hoverStyle:{}}>
                        <div className="avatar" style={this.props.from?serviceStyle:aboutStyle}>
                            <img src={`${ this.props.avatar}`} />
                        </div>
                        <div className="title">
                            <p>{this.props.title}</p>
                        </div>
                        <div className="description">
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                )}
            </ReactHoverObserver>
        );
    }
}

GuideCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    from: PropTypes.string
};
export default GuideCard;