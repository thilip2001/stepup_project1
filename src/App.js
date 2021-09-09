import NavBar from "./navbar/NavBar";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SingleCourse from "./pages/single/SingleCourse";
import ViewCourse from "./pages/view courses/ViewCourse";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
           <Route path="/register">{ user ?<Home/> : <Register/>}
          </Route>
          <Route path="/login">{ user ?<Home/> : <Login/>}
          </Route>
          <Route path="/create">{ user ?<Create/> : <Register/>}
          </Route>
          <Route path="/viewcourse">{ user ?<ViewCourse/> : <Register/>}
          </Route>
          <Route path="/single">
            <SingleCourse/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
