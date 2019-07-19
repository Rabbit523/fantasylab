import React from 'react'
import PropTypes from 'prop-types'
import ReactHoverObserver from 'react-hover-observer';

class ServiceItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            des_hover: {
                display: 'block'
            },
            avatar_hover: {
                borderColor: this.props.color,
                color: this.props.color
            }
        };
    }

    render() {
        const item_hover = {
            backgroundImage: this.props.backimage?`url(${ this.props.backimage})`:'linear-gradient(to bottom, #09133a 0%, #070e28 100%);',
            backgroundSize: 'cover',
            borderBottom: '2px solid ' + this.props.color,
            cursor: 'pointer'
        };
        console.log("render",item_hover);
        return (
            <ReactHoverObserver className='service-item-observer'>
                {({ isHovering }) => (
                    <div className="service-item" style={isHovering?item_hover:{}}>
                        <div className="avatar-item" style={isHovering?this.state.avatar_hover:{}}>
                            <img src={`${ this.props.url}`} />
                        </div>
                        <div className="text-item">
                            <p>{this.props.title}</p>
                        </div>
                        <div className="description" style={isHovering?this.state.des_hover:{}}>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                )}
            </ReactHoverObserver>
        );
    }
}

ServiceItem.propTypes = {
    url: PropTypes.string.isRequired,
    backimage: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default ServiceItem;