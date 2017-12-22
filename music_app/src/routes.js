import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import SignUp from './Components/SignUp'
import Listen from './Components/Listen'


const site_routes = [
	{
        path: '/',
		exact: true,
        component: Home,
        name: 'Home'
	},
	{
        path: '/users/dashboard/:user_id',
        component: Dashboard,
        name: 'Dashboard'
	},
	{
		path: '/signup',
		exact: true,
        component: SignUp,
        name: 'SignUp'
	},
	{
		path: '/login',
		exact: true,
        component: Login,
        name: 'Login'
	},
	{
		path: '/listen',
		exact: true,
        component: Listen,
        name: 'Listen'
	},{
	path: '/callback',
	exact: false,
	component: Dashboard,
	name: 'callback'
	}
	
	
]
export default (
	<div>
		{site_routes.map((route, i) =>(
			<Route exact={route.exact} key={route.name} path={route.path} render={(props) => (
				<route.component key={i} {...props} />
			)}/>
		))}
	</div>

)
