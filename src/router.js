import {Switch,Route,Redirect} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import CharacterIntroduction from './pages/CharacterIntroduction';


const router = (props) => {

 return (
  <Switch> 

    {/* component load 方法1. */}
    <Route exact path = "/" component = {Home}/>

    {/* component load 方法2. */}
    {/* <Route path="/about">
      <About />
    </Route> */}

    <Route exact path="/about" component = {About} />
    <Route path = "/about/:PID" component = {About} />

    
    {/* <Route path="/characterIntroduction" component = {CharacterIntroduction} /> */}
    <Route path="/characterIntroduction" component = { () => CharacterIntroduction(props) } />
    
    <Redirect to = '/' />


  </Switch>
 )
};

export default router;

