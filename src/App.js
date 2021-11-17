import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BootCollection from './component/BootCollection/BootCollection';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Signup from './component/Login/Signup/Signup';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home" >
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute exact path="/boot-collection">
              <BootCollection></BootCollection>
            </PrivateRoute>
            <PrivateRoute exact path="/place-order/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
