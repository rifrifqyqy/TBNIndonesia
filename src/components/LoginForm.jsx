import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Disini Anda bisa melakukan pengecekan untuk menentukan jenis pengguna
    // Misalnya, berdasarkan username atau input lainnya.
    if (username === "admin" && password === "admin") {
      navigate("/event");
    } else if (username === "mentor" && password === "mentor") {
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="flex flex-col">
        <label>
          Username:
          <input className="border-2 p-2 rounded-md  focus:ring-sky-200 focus:ring-1" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
