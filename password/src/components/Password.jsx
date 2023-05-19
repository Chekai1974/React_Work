import React, { useState } from 'react'

function Password() {
    const [password, setPassword] = useState("");
    const changePassword = (e) => {
        setPassword(e.target.value)
    };
    const [showPassword, setShowPassword] = useState(false);
    const showPasswordChange = () => {
        setShowPassword(!showPassword)
    };

    const getLenghtPassword = () => {
        const length = password.length
        switch (true) {
            case length === 0:
                return 'Weak';
            case length < 8:
                return 'Weak';
            case length < 13:
                return 'Medium';
            default:
                return 'Strong';
        };

    };
    return (
        <div>
            <h2>Enter Your Password</h2>
            <input type={showPassword? "text" : "password"} placeholder="Enter your password" value={password} onChange={changePassword} />
            <button onClick={showPasswordChange}> {showPassword ? "🙈": "🙉" }</button>
            <p>{getLenghtPassword()}</p>
        </div>
    );
};

export default Password;