import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/home/Landing';
import Header from './components/home/Header';
import AuthPage from './components/home/AuthPage';
import Home from './components/home/Home';
import Plants from './components/home/Plants';
import About from './components/home/About';


function App() {

  
  return (
    <div className="App">    
      <Switch>
          <Route exact path="/">
            <Header/>
            <Landing/>
          </Route>
          <Route path="/auth">
            <AuthPage/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/plants-info">
            <Plants/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
         
      </Switch>
      
    </div>
  );
}

export default App;
