import { Link, Route} from 'react-router-dom';
import './App.css';
import Login from './components/registration/Login';
import Posts from './components/posts/Posts';
import UserProfile from './components/posts/UserProfile';
import PrivateRoute from './components/utils/PrivateRoute';
import SignUp from './components/registration/SignUp';
import { connect } from 'react-redux';

function App({userId}) {

  return (
    <div className="App">

      {/* If there is no token in localStorage then the login link is rendered.
       If there is a token then local storage will be cleared and the user will be taken to the login screen. */}
      {
        !localStorage.getItem("token")
        ? (
          <>
            <Link to="/login" >Login</Link>
            <Link to="/signUp" >Sign Up</Link>
          </>
        )
        : (
          <>
            {/* These links will only render when a token is found in localStorage */}
            <Link onClick={()=>{localStorage.clear(); window.location.reload()}} to="/" >Logout</Link>
            <Link to="/posts" >Issues</Link>
            <Link to={`/user/${userId}`} >My Profile</Link>
          </>
          )
      }

      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      <PrivateRoute path="/posts" component={Posts} />
      <PrivateRoute path={`/user/${userId}`} component={UserProfile} />
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    userId: state.userId,
  }
}

export default connect(mapStateToProps, null) (App);
