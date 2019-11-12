import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home/Home"
import Upload from "./views/FileUpload/Upload"
import NotFound from "./views/NotFound"
//comment

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/FileUpload" component={FileUpload} />
        <Route exact path="/">
          <Redirect to="/FileUpload" />
        </Route>
        <Route component={NotFound}/>
      </Switch>

    </div>

  );
}

export default App;
