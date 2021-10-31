import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuBar from './Component/Shared/MenuBar/MenuBar';
import Home from './Component/Home/Home/Home';
import Footer from './Component/Shared/Footer/Footer';
import PackageDetails from './Component/Home/PackageDetails/PackageDetails';
import LogIn from './Component/registare/LogIn/LogIn';
import AuthProvider from './Component/context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import MyBooking from './Component/MyBooking/MyBooking';

function App() {
  return (
    <AuthProvider>
    <Router>
      <MenuBar />
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute exact path="/packages/:id">
            <PackageDetails />
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path='/mybooking/:name'>
            <MyBooking />
          </PrivateRoute>
      </Switch>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
