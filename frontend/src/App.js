import React from "react";
import AddUser from "./AddUser";
import retrieve from "./retrieve";
import Welcome from "./Welcome";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import hellodocker from "./components/hellodocker";
import helloeks from "./components/helloeks";
import hellojenkins from "./components/hellojenkins";
import hellok8s from "./components/hellok8s";
import UserComponent from './UserComponent';
import kanhadetails from "./components/kanhadetails";



function App() {
    return (
      <div id="main">
                <UserComponent />

      <Router>
        <Switch>
        <Route exact path={["/","/AddUser"]} component={AddUser} />
        <Route exact path="/AddUser" component={AddUser} />
        <Route exact path="/Welcome" component={Welcome} />
        <Route exact path="/retrieve" component={retrieve} />
        <Route exact path="/hellodocker" component={hellodocker} />
        <Route exact path="/helloeks" component={helloeks} />
        <Route exact path="/hellojenkins" component={hellojenkins} />
        <Route exact path="/hellok8s" component={hellok8s} />
        <Route exact path="/kanhadetails" component={kanhadetails} />

        </Switch>
      </Router>
      </div>
    );
  }


export default App;
