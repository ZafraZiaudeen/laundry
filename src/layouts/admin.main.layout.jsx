import AppSidebar from "@/admin/components/AppSidebar";
import Header from "@/admin/components/Header";
import { Outlet } from "react-router";

function AdminMainLayout() {
    return (
        <div className="flex h-screen bg-gray-50">
            <AppSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
export default AdminMainLayout;