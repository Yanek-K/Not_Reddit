import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

//Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import PostInfo from "./pages/PostInfo";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navbar />
      </div>
      <div className="Main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post" component={PostInfo} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
