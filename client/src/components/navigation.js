import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary borderless inverted size='huge'
      style={{
          backgroundColor: 'navy'
      }}>
        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
            <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
            fitted='vertically'
          >
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
