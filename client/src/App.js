import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageHead from "./Components/PageHead"
import Navigation from './Components/Navigation';


function App() {
  return (
    <div>
    <PageHead />
    <Navigation />
    <Router>
      
    </Router>
    </div>
  );
}

export default App;