import Home from "./pages/Home.js"
import HoursLocation from "./pages/HoursLocation.js"
import Menu from "./pages/Menu.js"
import Services from "./pages/Services.js"
import Family from "./pages/Family.js"
import ContactUs from "./pages/ContactUs.js"
import './App.css'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App() {
  return (
    <div> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home}><Home/></Route>
          <Route exact path="/hours-location" component={HoursLocation}><HoursLocation/></Route>
          <Route exact path="/menu" component={Menu}><Menu/></Route>
          <Route exact path="/services" component={Services}><Services/></Route>
          <Route exact path="/our-family" component={Family}><Family/></Route>
          <Route exact path="/contact-us" component={ContactUs}><ContactUs/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
