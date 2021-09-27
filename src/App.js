import { IconButton, Switch } from "@material-ui/core";
import { Brightness4, MenuOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch as Switching,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import MessagePanel from "./pages/MessagePanel";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioPanel from "./pages/PortfolioPanel";
import ResumePage from "./pages/ResumePage";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <div className="app">
      <Router>
        <div className="sidebar__hamburgerMenu ">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuOutlined />
          </IconButton>
        </div>
        <div className="lightDarkMode">
          <div className="leftContent">
            <Brightness4 />
          </div>
          <div className="RightContent">
            <Switch
              value=""
              checked={checked}
              onChange={themeToggler}
              inputProps={{ "aria-label": "" }}
              size="medium"
            />
          </div>
        </div>
        <Sidebar navToggle={navToggle} />

        <Switching>
          <Route exact path="/portfolio-panel">
            <PortfolioPanel />
          </Route>
          <Route exact path="/message-panel">
            <MessagePanel />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/resume">
            <ResumePage />
          </Route>
          <Route exact path="/portfolios">
            <PortfolioPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switching>
      </Router>
    </div>
  );
}

export default App;
