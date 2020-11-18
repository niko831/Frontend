import { Link, Route } from 'react-router-dom';
import './App.css';
import Login from './components/registration/Login';
import Posts from './components/posts/Posts';
import UserProfile from './components/posts/UserProfile';
import PrivateRoute from './components/utils/PrivateRoute';
import SignUp from './components/registration/SignUp';

function App() {
  return (
    <div className="App">
      <Link to="/login" >Login</Link>
      <Link to="/signUp" >Sign Up</Link>
      <Link to="/posts" >Issues</Link>
      <Link to="/user/:id" >My Profile</Link>

      {/* <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} /> */}
      <PrivateRoute path="/posts" component={Posts} />
      <PrivateRoute path="/user/:id" component={UserProfile} />
    </div>
  );
}

export default App;
