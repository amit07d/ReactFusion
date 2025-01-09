import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    };

    return (
        <div className="mb-5">
            <h2 className="font-bold mb-5">Login</h2>
            <input
                className="text-3xl rounded "
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
