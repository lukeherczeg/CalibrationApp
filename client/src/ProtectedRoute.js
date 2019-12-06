import React, { Component }  from 'react';
import { Route, Switch, Redirect, withRouter  } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';

class ProtectedRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
    };
  }

  toggleAuth = () => {
      this.setState(state => ({ authenticated: !state.authenticated }));
    };

  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route
        {...props}
        render={props => (
          this.state.authenticated ?
            <Component {...props} /> :
            <Redirect to='/Home' />
        )}
      />
    )
  }
}

export default ProtectedRoute;
