import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";


//Views
import Home from "./Pages/Home/Home";
import Followers from "./Pages/Followers/Followers";
import Error from "./Pages/Error/Error"
import Followings from "./Pages/Following/Following"
import Repos from "./Pages/Repos/Repos"
import GitHubFollow from "./Components/Custom/GitHubFollow/GitHubFollow";


//Layaut
import MainLayout from "./Layaut/MainLayaut";

function App() {
  //JSX

  return (
    <BrowserRouter>
        <MainLayout>
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/:user/followers" exact>
              <Followers />
            </Route>
            <Route path="/:user/following" exact>
              <Followings />
            </Route>
            <Route path="/users/:user" exact>
              <GitHubFollow />
            </Route>
            <Route path="/:user/repos" exact>
              <Repos />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </MainLayout>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
