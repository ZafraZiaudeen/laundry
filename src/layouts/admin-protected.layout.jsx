import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router";

const AdminProtectedLayout = () => {
  const { user, isLoaded } = useUser();

  // Wait until user data is loaded
  if (!isLoaded) {
    return null; // Or a loading spinner/component
  }

  // If user is loaded but not an admin, redirect to home page
  if (user && user.publicMetadata.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // If user is an admin, render the outlet
  return <Outlet />;
};

export default AdminProtectedLayout;