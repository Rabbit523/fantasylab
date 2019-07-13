import React from 'react'
import {connect} from 'react-redux'
import Navigation from './common/navigation'
import Footer from './common/mainFooter'
import AdminSidebar from './common/sidebar';
import { slide as Menu } from 'react-burger-menu'

class MenuWrap extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        hidden: false
      };
    }
  
    componentWillReceiveProps(nextProps) {
      const sideChanged = this.props.children.props.right !== nextProps.children.props.right;
  
      if (sideChanged) {
        this.setState({hidden : true});
  
        setTimeout(() => {
          this.show();
        }, this.props.wait);
      }
    }
  
    show() {
      this.setState({hidden : false});
    }
  
    render() {
      let style;
  
      if (this.state.hidden) {
        style = {display: 'none'};
      }
  
      return (
        <div style={style} className={this.props.side}>
          {this.props.children}
        </div>
      );
    }
  }
  
class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMenu: 'slide',
            side: 'left'
        };
    }

    render() {
        return (
            ( this.props.isAdmin ) ? (
                <div>
                    <AdminSidebar/>
                    <Navigation/>
                    <main className="fadeIn animated" style={{paddingLeft: 150}}>
                        {this.props.children}
                    </main>
                    <Footer/>
                </div>
            ) : (
                <div>
                    <Navigation/>
                    <main className="fadeIn animated">
                        {this.props.children}
                    </main>
                    <Footer/>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.Auth.isAuthenticated,
        isAdmin: state.Auth.isAdmin
    }
};

export default connect(mapStateToProps)(Main);