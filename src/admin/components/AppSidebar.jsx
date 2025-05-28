"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router"
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
} from "./Icons"
import { useUser, SignOutButton, UserButton } from "@clerk/clerk-react"

export default function AppSidebar() {
  const [expanded, setExpanded] = useState(true)
  const location = useLocation()
  const { user } = useUser()

  const isActive = (path) => {
    return location.pathname === path
  }

  const navigation = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="w-6 h-6" />,
      path: "/admin",
      active: isActive("/admin"),
    },
    {
      name: "Orders",
      icon: <ShoppingBasket className="w-6 h-6" />,
      path: "/admin/orders",
      active: isActive("/admin/orders"),
      badge: 12,
    },
    {
      name: "Customers",
      icon: <Users className="w-6 h-6" />,
      path: "/admin/customers",
      active: isActive("/admin/customers"),
    },
    {
      name: "Schedule",
      icon: <Calendar className="w-6 h-6" />,
      path: "/admin/schedule",
      active: isActive("/admin/schedule"),
    },
    {
      name: "Deliveries",
      icon: <Truck className="w-6 h-6" />,
      path: "/admin/deliveries",
      active: isActive("/admin/deliveries"),
    },
    {
      name: "Inventory",
      icon: <Package className="w-6 h-6" />,
      path: "/admin/inventory",
      active: isActive("/admin/inventory"),
    },
    {
      name: "Services",
      icon: <Shirt className="w-6 h-6" />,
      path: "/admin/services",
      active: isActive("/admin/services"),
    },
    {
      name: "Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      path: "/admin/analytics",
      active: isActive("/admin/analytics"),
    },
    {
      name: "Settings",
      icon: <Settings className="w-6 h-6" />,
      path: "/admin/settings",
      active: isActive("/admin/settings"),
    },
  ]

  return (
    <aside
      className={`${
        expanded ? "w-64" : "w-20"
      } bg-white border-r border-gray-200 h-screen transition-all duration-300 ease-in-out flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <div className={`flex items-center ${!expanded && "justify-center w-full"}`}>
          <div className="bg-sky-600 text-white p-2 rounded-md">
            <Package className="w-6 h-6" />
          </div>
          {expanded && (
            <span className="ml-2 font-bold text-xl text-gray-800">
              Laundry<span className="text-sky-600">Admin</span>
            </span>
          )}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 ${!expanded && "hidden"}`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        {!expanded && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 absolute -right-3 top-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg ${
                  item.active ? "bg-sky-50 text-sky-600" : "text-gray-700 hover:bg-gray-100"
                } transition-colors group`}
              >
                <div className={`${item.active ? "text-sky-600" : "text-gray-500 group-hover:text-gray-700"}`}>
                  {item.icon}
                </div>
                {expanded && (
                  <>
                    <span className="ml-3 flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="bg-sky-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
                {!expanded && item.badge && (
                  <span className="absolute left-11 bg-sky-600 text-white text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`border-t p-4 ${expanded ? "" : "flex justify-center"}`}>
        {expanded ? (
          <div className="flex items-center">
            <UserButton />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">
                {user?.fullName || "Administrator"}
              </p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        ) : (
          <UserButton />
        )}
      </div>

      <div className="p-4 border-t">
        <SignOutButton>
          <button
            className={`flex items-center justify-center w-full p-2 text-gray-700 hover:bg-gray-100 rounded-lg ${
              expanded ? "justify-start" : ""
            }`}
          >
            <LogOut className="w-5 h-5" />
            {expanded && <span className="ml-3">Logout</span>}
          </button>
        </SignOutButton>
      </div>
    </aside>
  )
}