import React from "react"
import PropTypes from "prop-types"
class TopNav extends React.Component {
  render () {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <React.Fragment>
        <div className="top-nav">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-1 text-center">
                <a className="top-nav-logo"><img src={this.props.logo}/></a>
              </div>
              {isLoggedIn ? (
                <div className="col text-right">
                  <span className="dropdown user-menu">
                    <span className="user-menu-avatar dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="user-menu-name d-none d-sm-none d-md-inline-block">{this.props.email}</span>
                      <img src={this.props.avatar}/>
                    </span>
                    <div className="user-menu-dropdown dropdown-menu">
                      <a href={this.props.account} className="user-menu-link dropdown-item">Account</a>
                      <a href={this.props.logout} className="user-menu-link dropdown-item" data-method="delete">Logout</a>
                    </div>
                  </span>
                </div>
              ) : (
                <div className="col text-right">
                  <a href={this.props.signUp} className="top-nav-link">Sign Up</a>
                  <a href={this.props.login} className="top-nav-link">Login</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

TopNav.propTypes = {
  logo: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  signUp: PropTypes.string,
  login: PropTypes.string,
  email:  PropTypes.string,
  avatar: PropTypes.string,
  account: PropTypes.string,
  logout: PropTypes.string
};
export default TopNav
