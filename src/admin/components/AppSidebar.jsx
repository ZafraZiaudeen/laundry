import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
	LayoutDashboard,
	ShoppingBasket,
	Users,
	Calendar,
	Settings,
	BarChart3,
	LogOut,
	ChevronLeft,
	ChevronRight,
	Truck,
	Package,
	Shirt,
} from "./Icons";
import { useUser, SignOutButton, UserButton } from "@clerk/clerk-react";

export default function AppSidebar() {
	const [expanded, setExpanded] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const location = useLocation();
	const { user } = useUser();

	// Handle responsive behavior
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
			setExpanded(window.innerWidth >= 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isActive = (path) => {
		return location.pathname === path;
	};

	const navigation = [
		{
			name: "Dashboard",
			icon: <LayoutDashboard className="w-5 h-5" />,
			path: "/admin/dashboard",
			active: isActive("/admin/dashboard"),
		},
		{
			name: "Services Category",
			icon: <Shirt className="w-5 h-5" />,
			path: "/admin/category",
			active: isActive("/admin/category"),
		},
		{
			name: "Orders",
			icon: <ShoppingBasket className="w-5 h-5" />,
			path: "/admin/orders",
			active: isActive("/admin/orders"),
			badge: 12,
		},
		{
			name: "Customers",
			icon: <Users className="w-5 h-5" />,
			path: "/admin/customers",
			active: isActive("/admin/customers"),
		},
		{
			name: "Schedule",
			icon: <Calendar className="w-5 h-5" />,
			path: "/admin/schedule",
			active: isActive("/admin/schedule"),
		},
		{
			name: "Deliveries",
			icon: <Truck className="w-5 h-5" />,
			path: "/admin/deliveries",
			active: isActive("/admin/deliveries"),
		},
		{
			name: "Inventory",
			icon: <Package className="w-5 h-5" />,
			path: "/admin/inventory",
			active: isActive("/admin/inventory"),
		},
		{
			name: "Services",
			icon: <Shirt className="w-5 h-5" />,
			path: "/admin/services",
			active: isActive("/admin/services"),
		},
		{
			name: "Analytics",
			icon: <BarChart3 className="w-5 h-5" />,
			path: "/admin/analytics",
			active: isActive("/admin/analytics"),
		},
		{
			name: "Settings",
			icon: <Settings className="w-5 h-5" />,
			path: "/admin/settings",
			active: isActive("/admin/settings"),
		},
	];

	return (
		<aside
			className={`bg-white shadow-lg h-screen transition-all duration-300 ease-in-out flex flex-col border-r border-gray-200 relative ${
				isMobile ? "w-16" : "sticky md:min-w-[64px] md:z-30"
			} ${expanded ? (isMobile ? "w-48" : "w-64") : "w-16"}`}
			aria-label="Main navigation"
		>
			{/* Header Section */}
			<div className="p-4 flex items-center justify-between border-b border-gray-200">
				<div
					className={`flex items-center ${
						!expanded && "justify-center w-full"
					}`}
				>
					<div className="bg-sky-600 text-white p-2 rounded-md">
						<Package className="w-6 h-6" />
					</div>
					{expanded && !isMobile && (
						<span className="ml-3 font-semibold text-lg text-gray-900">
							Laundry<span className="text-sky-600">Admin</span>
						</span>
					)}
				</div>
				{!isMobile && (
					<button
						onClick={() => setExpanded(!expanded)}
						className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
							!expanded && "hidden"
						}`}
						aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
				)}
				{!expanded && !isMobile && (
					<button
						onClick={() => setExpanded(!expanded)}
						className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 absolute -right-3 top-10 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500"
						aria-label="Expand sidebar"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				)}
			</div>

			{/* Mobile Expand Button */}
			{isMobile && !expanded && (
				<button
					onClick={() => setExpanded(true)}
					className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 absolute -right-3 top-10 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 z-50"
					aria-label="Expand sidebar"
				>
					<ChevronRight className="w-5 h-5" />
				</button>
			)}

			{/* Mobile Collapse Button */}
			{isMobile && expanded && (
				<button
					onClick={() => setExpanded(false)}
					className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 absolute -right-3 top-10 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 z-50"
					aria-label="Collapse sidebar"
				>
					<ChevronLeft className="w-5 h-5" />
				</button>
			)}

			{/* Navigation Links */}
			<nav className="flex-1 overflow-y-auto py-4 px-3">
				<ul className="space-y-1">
					{navigation.map((item) => (
						<li key={item.name}>
							<Link
								to={item.path}
								className={`flex items-center p-2.5 rounded-lg text-sm font-medium ${
									item.active
										? "bg-sky-50 text-sky-700 font-semibold"
										: "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
								} transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-sky-500`}
								aria-current={item.active ? "page" : undefined}
							>
								<div
									className={`${
										item.active
											? "text-sky-700"
											: "text-gray-500 group-hover:text-gray-700"
									} flex-shrink-0`}
								>
									{item.icon}
								</div>
								{expanded && (
									<span className="ml-3 flex-1 truncate">{item.name}</span>
								)}
								{item.badge && expanded && (
									<span className="bg-sky-600 text-white text-xs font-medium px-2 py-0.5 rounded-full">
										{item.badge}
									</span>
								)}
								{item.badge && !expanded && (
									<span className="absolute left-10 bg-sky-600 text-white text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full">
										{item.badge}
									</span>
								)}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* User Section */}
			<div className={`border-t p-4 ${expanded ? "" : "flex justify-center"}`}>
				<div
					className={`flex items-center ${expanded ? "space-x-3" : ""} ${
						!expanded && "justify-center w-full"
					}`}
				>
					<UserButton />
					{expanded && (
						<div className="min-w-0">
							<p className="text-sm font-medium text-gray-900 truncate">
								{user?.fullName || "Administrator"}
							</p>
							<p className="text-xs text-gray-500">Administrator</p>
						</div>
					)}
				</div>
			</div>

			{/* Logout Button */}
			<div className="p-4 border-t">
				<SignOutButton>
					<button
						className={`flex items-center w-full p-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
							expanded ? "justify-start" : "justify-center"
						}`}
						aria-label="Logout"
					>
						<LogOut className="w-5 h-5 flex-shrink-0" />
						{expanded && <span className="ml-3">Logout</span>}
					</button>
				</SignOutButton>
			</div>
		</aside>
	);
}
