import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuBar from './Component/Shared/MenuBar/MenuBar';
import Home from './Component/Home/Home/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <MenuBar />
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
