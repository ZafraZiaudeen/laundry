import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router";

const RedirectBasedOnRole = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // Or a loading spinner/component
  }


  if (user) {
    // If user is an admin, redirect to admin dashboard
    if (user.publicMetadata.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    // If user is authenticated but not an admin, proceed to MainLayout routes
    return <Outlet />;
  }

  // If no user is logged in, proceed to public routes
  return <Outlet />;
};

export default RedirectBasedOnRole;