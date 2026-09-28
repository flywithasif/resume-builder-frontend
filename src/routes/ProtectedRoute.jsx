import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
  const location = useLocation();

  const token = localStorage.getItem("resumely_token");

  if (!token) {
    const destination =
      location.pathname +
      location.search +
      location.hash;

    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: destination,
        }}
      />
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;