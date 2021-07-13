import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageHead from "./Components/PageHead";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import LoggedNav from './Components/LoggedNav'
function App() {
  const tempUser = {
    name: 'David',
    loggedIn: true
  }
  return (
    <div
      style={{
        backgroundColor: "navy",
      }}
    >
      <Router>
        <PageHead />

        {tempUser.loggedIn ? (<LoggedNav user={tempUser} />) : (<Nav />)}
        
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
