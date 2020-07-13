import React from "react";
import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader.js";
import { getMockLogo, getMockTabs } from "./functions/mock";
import AnimesScreen from "./screens/Animes";
import SettingsScreen from "./screens/Settings";
import HomeScreen from "./screens/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const mockTabs = getMockTabs();
  const mockLogo = getMockLogo();
  return (
    <div id="app" className="dark-purple-theme">
      <Router>
        <TopHeader tabs={mockTabs} logo={mockLogo} />
        <Switch>
          <Route path="/animes">
            <AnimesScreen />
          </Route>
          <Route path="/settings">
            <SettingsScreen />
          </Route>
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
