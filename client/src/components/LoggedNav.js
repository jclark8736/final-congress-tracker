import { Menu, Header, Icon, Button, Flag } from "semantic-ui-react";
import { Link } from "react-router-dom";
const LoggedNav = ({ user }) => {
  const styling = { color: "antiquewhite" };
  console.log(user)
  return (
    <Menu attached='top' size="large" style={{ backgroundColor: "navy" }}>
      <Link to="/">
        <Menu.Item style={styling}>
          <Icon name="globe" />
          HOME
        </Menu.Item>
      </Link>
      <Link to="/">
        <Menu.Item style={styling}>
          <Icon name="users" />
          User Dashboard
        </Menu.Item>
      </Link>
      <Menu.Item style={styling}>
      Welcome, {user.name}
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button color="red">Logout</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default LoggedNav;
