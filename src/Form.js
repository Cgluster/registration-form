import { useState } from "react";

export default function Form() {

    // Parameters for a user to enter
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // This is to check if a user fills in every field
    const [ submitted, setSubmitted ] = useState(false);
    const [ error, setError ] = useState(false);

    // Entering user's name
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    }

    // Entering user's email
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    // Entering user's password
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    // Handling submit with the three values above
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Success message
    const successMessage = () => {
        return (
            <div
            className="success"
            style={{
                display: submitted ? '' : 'none',
            }}>
                <h1>User {name} has successfully registered</h1>
            </div>
        );
    };

    // Error message
    const errorMessage = () => {
        return (
            <div
            className="error"
            style={{
                display: error ? '' : 'none',
            }}>
                <h1>Please fill all fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                User Registration
            </div>

            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                <label className="label">Name</label>
                <input onChange={handleName} className="input" value={name} type="text" />

                <label className="label">Email</label>
                <input onChange={handleEmail} className="input" value={email} type="text" />

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input" value={password} type="password" />

                <button onClick={handleSubmit} className="btn" type="submit" >
                    Submit
                </button>
            </form>
        </div>
    )
}