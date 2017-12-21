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
        component: Home
	},
	{
        path: '/users/dashboard/:user_id',
        component: Dashboard
	},
	{
		path: '/signup',
		exact: true,
        component: SignUp
	},
	{
		path: '/login',
		exact: true,
        component: Login
	},
	{
		path: 'listen',
		exact: true,
        component: Listen
	}
]
export default (
	<div>
		{site_routes.map((route, i) =>(
			<Route exact={route.exact} path={route.path} render={(props) => (
				<route.component key={i} {...props} />
			)}/>
		))}
	</div>

)
