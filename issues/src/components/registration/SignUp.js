import React from "react";
import { connect } from 'react-redux';
import { signUser } from '../redux/actions';


const SignUp = (props) => {

    const [ signData, setSignData ] = useState({
    email: "",
    password: "",
    });

    // const [ signErrors, setSignErrors ] = useState({
    // email: "",
    // password: "",
    // });

  const handleSignChanges = e => {
    const signCredentials = {
      ...signData,
      [e.target.name]: e.target.value
    };
    setSignData(signCredentials);
  };

  const signSubmit = e => {
    e.preventDefault();
    props.signUser(signData)
        setSignData({
          email: "",
          password: "",
        });
  };

  return (
    <div className="signForm">
        <form onSubmit={signSubmit}>
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={signData.email}
                onChange={handleSignChanges}
            />
            {/* <br /> */}
            {/* {formError.email.length > 0 ? (
                <p className="error">{formError.email}</p>
            ) : null} */}
            <input
                name="password"
                type="password"
                placeholder="Enter your Password"
                value={signData.password}
                onChange={handleSignChanges}
            />
            {/* <br />
            {formError.password.length > 0 ? (
                <p className="error">{formError.password}</p>
            ) : null} */}
            <br />
            <button>Submit</button>
        </form>
    </div>
  );
};

export default connect(null, { signUser })(SignUp);