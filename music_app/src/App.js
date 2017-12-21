import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import routes from './routes'
import { Menu } from 'semantic-ui-react'

class App extends Component {
  render() {
    const site_routes = [
      {
            path: '/',
            name: 'Home'
      },
      {
            path: '/users/dashboard/:user_id',
            name: 'Dashboard'
      },
      {
        path: '/signup',
            name: 'SignUp'
      },
      {
        path: '/login',
            name: 'Login'
      },
      {
        path: '/listen',
            name: 'Listen'
      }
    ]

    const menu_items = site_routes.map((route) => (
      {
          as: () => <Menu.Item className=''><Link to={`${route.path}`}>{route.name}</Link></Menu.Item>   
      }
  ))

    const Header = () => (
      <Menu items={menu_items} />
    )

    return (
      <BrowserRouter>
          <div>
            <Header />
            {routes}
          </div>
		  </BrowserRouter>
    );
  }
}

export default App;
