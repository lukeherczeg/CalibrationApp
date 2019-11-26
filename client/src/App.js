import React from 'react';
import { Route, Switch, Redirect,withRouter  } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home/Home"
import Register from"./views/Register/Register"
import Upload from "./views/FileUpload/Upload"
import NotFound from "./views/NotFound"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Register" component ={Register}/>
        <Route exact path="/Upload" component={Upload} />
        <Route exact path="/">
          <Redirect to="/Home"/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
