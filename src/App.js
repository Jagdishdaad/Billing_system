import "./App.css";
import Printpage from "./Printpage/Printpage";
import MainPage from "./MainPage/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/printpage">
            <Printpage />
          </Route>

          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
