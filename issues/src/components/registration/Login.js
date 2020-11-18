import React from 'react';

const initialState = {
    username: "",
    password: "",
}

const initialDisabled = true

const Login = () => {
	const history = useHistory();

    const [credentials, setCredentials] = useState(initialState);
    const [credentialErrors, setCredentialErrors] = useState(initialState)
    const [disabled, setDisabled] = useState(initialDisabled)


     const login = e => {
       e.preventDefault();
       axios.post('/auth/login', `grant_type=password&username=${credentials.username}&password=${credentials.password}`, {
         headers: {
           // btoa is converting our client id/client secret into base64
           Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
           'Content-Type': 'application/x-www-form-urlencoded'
         }
       })
       .then(res => {
         console.log(res.data)
         localStorage.setItem('token', res.data.access_token);
         history.push('/item');
       })
       setCredentials(initialValues)
     }
     const inputChange = (name, value) => {
         validate(name, value)
         setCredentials({
             ...credentials, [name]: value
         })
     }
    return(
        <div>
            <form>

            </form>
        </div>
    )
}

export default Login