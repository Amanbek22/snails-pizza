import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PublicRoute({ auth, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
        navigate('/admin')
    }
  }, [auth]);

  return children;
}

export default PublicRoute;
