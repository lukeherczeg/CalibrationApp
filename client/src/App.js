import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
#comment

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
