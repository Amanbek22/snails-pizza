import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "../../redux/slices/AuthSlice"

function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if(login === 'admin' && password === 'admin') {
        dispatch( loginRedux() )
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
