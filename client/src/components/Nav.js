import { Menu, Header, Icon, Button, Flag } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const Nav = () => {

    const styling = {color: 'antiquewhite'}
    return (
        <Menu size='large' style={{backgroundColor:'navy'}}>
            <Link to='/'>
            <Menu.Item style={styling}><Icon name='globe' />HOME</Menu.Item>
            </Link>
            <Menu.Menu position='right'>
            <Link to='/login'>
            <Menu.Item>
                <Button color='green'>Login</Button></Menu.Item>
            </Link>
            </Menu.Menu>
        </Menu>
    )
}

export default Nav
