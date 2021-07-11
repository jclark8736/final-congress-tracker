import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHead from "./Components/PageHead";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Nav from './Components/Nav'
function App() {
  return (
    <div
      style={{
        backgroundColor: "navy",
      }}
    >
      <Router>
        <PageHead />
      <Nav />
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
