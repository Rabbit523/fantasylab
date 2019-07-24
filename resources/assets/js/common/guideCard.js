import React from 'react'
import PropTypes from 'prop-types'
import ReactHoverObserver from 'react-hover-observer';

class GuideCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverStyle: {
                borderBottom: '2px solid #8341ff',
                cursor: 'pointer'
            }
        }
    }

    render() {
        const {hoverStyle} = this.state;
        return (
            <ReactHoverObserver className='guide-card-observer'>
                {({ isHovering }) => (
                    <div className="guide-card" style={isHovering?hoverStyle:{}}>
                        <div className="avatar">
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
    description: PropTypes.string
};
export default GuideCard;