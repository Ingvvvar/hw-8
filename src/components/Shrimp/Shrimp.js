import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const Tiger = () => <h2>Tiger Shrimp</h2>
const Jumbo = () => <h2>Jumbo Shrimp</h2>

const routes = [
  {
    path: '/tiger',
    component: Tiger
  },
  {
    path: '/jumbo',
    component: Jumbo,
  }
]

export default function Shrimp() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/jumbo">Jumbo Shrimp</Link></li>
          <li><Link to="/tiger">Tiger Shrimp</Link></li>
        </ul>

        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
          >
            <route.component />
          </Route>
        ))}
      </div>
    </Router>
  )
}