import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import routes from './routes'
import './App.css'
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Segment,
//   Visibility,
// } from 'semantic-ui-react'

class App extends Component {
  render() {
  //   const site_routes = [
  //     {
  //           path: '/',
  //           name: 'Home'
  //     },
  //     {
  //           path: '/users/dashboard/:user_id',
  //           name: 'Dashboard'
  //     },
  //     {
  //       path: '/listen',
  //           name: 'Listen'
  //     }
  //   ]

  //   const menu_items = site_routes.map((route) => (
  //     {
  //         as: () => <Menu.Item className=''><Link to={`${route.path}`}>{route.name}</Link></Menu.Item>   
  //     }
  // ))

  //   const Header = () => (
  //     <Menu fixed='top' size='large' items={menu_items}>
  //     <Container>
  //       <Menu.Menu position='right'>
  //         <Menu.Item className='item'>
  //           <Button><Link to='/login'>Login</Link></Button>
  //         </Menu.Item>
  //         <Menu.Item>
  //         <Button><Link to='/signup'>Sign Up</Link></Button>
  //         </Menu.Item>
  //       </Menu.Menu>
  //     </Container>
  //   </Menu>  
  //   )

    return (
      <BrowserRouter>
          <div>
            {routes}
          </div>
		  </BrowserRouter>
    );
  }
}

export default App;
