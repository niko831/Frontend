import Axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignUp = () => {
    // const { register, handleSubmit, errors } = useForm();
	const [redirect, setRedirect] = useState(false);

	const onSubmit = (data) => {
		console.log(data);
		Axios.post("/auth/signup", data)
			.then((response) => {
				console.log(response);
                console.log(response.status);
                setRedirect(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

    if (redirect) {
		return <Redirect to="/login" />;
	} 

    return(
        <div>
            <form onSubmit={()=>onSubmit()} >
                <input type="text" name="username" value="" onChange={()=>{}} />
                <input type="password" name="password" value="" onChange={()=>{}} />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default SignUp