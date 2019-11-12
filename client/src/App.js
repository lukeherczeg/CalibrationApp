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
        <Route exact path="/Upload" component={Upload} />
        <Route exact path="/">
          <Redirect to="/Upload" />
        </Route>
        <Route component={NotFound}/>
      </Switch>

    </div>

  );
}

export default App;
