import "./App.css";
import { Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import PostInfo from "./pages/PostInfo";
import SubredditInfo from "./components/SubredditInfo";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Navbar />
        <SubredditInfo />
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
