import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ auth, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
        navigate('/login')
    }
  }, [auth]);

  return children;
}

export default PrivateRoute;
