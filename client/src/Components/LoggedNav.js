import { Menu, Icon, Button, Flag } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Auth from '../Utils/auth';

const LoggedNav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const { firstName } = Auth.getUser().data
  
  const styling = { color: "antiquewhite" };
  return (
    <Menu  size="large" style={{ backgroundColor: "navy" }}>
      <Link to="/">
        <Menu.Item style={styling}>
          <Icon name="globe" />
          HOME
        </Menu.Item>
      </Link>
      <Link to="/user">
        <Menu.Item style={styling}>
          <Icon name="users" />
          User Dashboard
        </Menu.Item>
      </Link>
      <Menu.Item style={{ color: 'antiquewhite', paddingBottom: '2em' }}>
        <Flag style={{ paddingRight: '1.5em' }} name='us' />
        Welcome, {firstName}
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button color="red" onClick={logout}>Logout</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default LoggedNav;
