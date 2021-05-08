import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import HeaderComponent from 'components/Header';
import FooterComponent from 'components/Footer';

export default function Routes() {
  return (
    <BrowserRouter>
      <HeaderComponent />
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
      <FooterComponent />
    </BrowserRouter>
  );
}