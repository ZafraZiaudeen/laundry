import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedLayout = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const location = useLocation();

  // Handle loading state
  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>; // Loading indicator
  }

  // Handle authentication
  if (!isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // Render protected routes
  return <Outlet />;
};

export default ProtectedLayout;