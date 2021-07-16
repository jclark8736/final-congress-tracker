import "semantic-ui-css/semantic.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageHead from "./Components/PageHead";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import LoggedNav from "./Components/LoggedNav";
import Userdash from "./Components/Userdash";

import Auth from './Utils/auth';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache()
// })

//Auth
//~~~~~~~~~~~~~~~~~~~~~~~~~
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
//~~~~~~~~~~~~~~~~~~~~~~

function App() {
  const tempUser = {
    name: 'David'
  }

  //console.log("User", Auth.getUser());
  return (
    <ApolloProvider client={client}>
    <div
      style={{
        backgroundColor: "navy",
      }}
    >
      <Router>
        <PageHead />

        {Auth.loggedIn() ? (<LoggedNav user={tempUser} />) : (<Nav />)}
        
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user" component={Userdash} />
        </Switch>
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;
