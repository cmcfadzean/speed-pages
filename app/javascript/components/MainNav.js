import React from "react"
import PropTypes from "prop-types"
class MainNav extends React.Component {
  render () {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <React.Fragment>
        <div className="main-nav col flex-fill">
          <div className="main-nav-top"><img className="main-nav-logo" src={this.props.logo}/></div>
          <div className="main-nav-middle">
            <a href="#" className="main-nav-link active"><i className="main-nav-icon fa fa-tachometer"></i></a>
            <a href="#" className="main-nav-link active"><i className="main-nav-icon fa fa-tachometer"></i></a>
            <a href="#" className="main-nav-link active"><i className="main-nav-icon fa fa-tachometer"></i></a>
          </div>
          <div className="main-nav-bottom">
            <span className="dropdown user-menu">
              <span className="user-menu-avatar dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={this.props.avatar}/>
              </span>
              <div className="user-menu-dropdown dropdown-menu">
                {isLoggedIn ? (
                  <div>
                    <a href={this.props.account} className="user-menu-link dropdown-item">{this.props.email}</a>
                    <a href={this.props.logout} className="user-menu-link dropdown-item" data-method="delete">Logout</a>
                  </div>
                ) : (
                  <div>
                    <a href={this.props.signUp} className="top-nav-link">Sign Up</a>
                    <a href={this.props.login} className="top-nav-link">Login</a>
                  </div>
                )}
              </div>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MainNav.propTypes = {
  logo: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  signUp: PropTypes.string,
  login: PropTypes.string,
  email:  PropTypes.string,
  avatar: PropTypes.string,
  account: PropTypes.string,
  logout: PropTypes.string
};
export default MainNav
