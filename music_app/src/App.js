import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
			    {routes}
		    </BrowserRouter>
    );
  }
}

export default App;
