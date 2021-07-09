import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageHead from "./Components/PageHead"
import Navigation from './Components/Navigation';
import LinkSideBar from './Components/LinkSideBar';
import SearchSideBar from './Components/SearchSideBar';
import MainPage from './Components/MainPage';


function App() {
  return (
    <div style={{
      backgroundColor: 'navy'
    }}>
    <PageHead />
    <Navigation />
    <Router>
    <MainPage />  
    </Router>
    </div>
  );
}

export default App;
