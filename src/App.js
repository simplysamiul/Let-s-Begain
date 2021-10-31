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

function App() {
  return (
    <div className="App">
    <Router>
      <MenuBar />
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path="/packages/:id">
            <PackageDetails />
          </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
