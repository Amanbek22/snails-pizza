import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setAuth }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if(login === 'admin' && password === 'admin') {
        setAuth(true)
        // navigate('/admin')
    }
  };
  return (
    <form onSubmit={submit} style={{ margin: 100 }}>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        placeholder="login"
      />
      <br />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <br />
      <button>Войти</button>
    </form>
  );
}

export default LoginPage;
