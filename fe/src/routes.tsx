import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/dashboard"
          component={Dashboard}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}