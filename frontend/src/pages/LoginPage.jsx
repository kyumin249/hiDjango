import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const myId = 'kyumin';
    const myPasswd = '1234';
    const handleLogin = (count, username, password) => {
        // Login logic here
        count++;
        setCount(count);
        if (count == 1) {
            if (username == myId && password == myPasswd) {
                navigate('/home');
            }
        }
    };

    return (
        <div className="login-page">
            <h2>hello, my blog!!</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => handleLogin(count, username, password)}>Login</button>
        </div>
    );
}


export default LoginPage;