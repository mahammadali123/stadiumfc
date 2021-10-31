import Home from './Home';
import ViewDetails from './ViewDetails';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


function App() {

  return (
    <BrowserRouter>
      
      <Switch>
      <Route exact strict path="/" component={Home} />

        <Route  path="/view-details/:name" component={ViewDetails} />
        </Switch>
      
    </BrowserRouter>
  );
}

export default App;
