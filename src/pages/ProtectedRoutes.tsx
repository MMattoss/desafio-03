import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedRoute = () => {
  const location = useLocation();

  return <>
    <SignedIn>
      <Outlet />
    </SignedIn>
    <SignedOut>
      <Navigate to="/sign-in" state={{ from: location }} replace />
    </SignedOut>
  </>
};

export default ProtectedRoute;
