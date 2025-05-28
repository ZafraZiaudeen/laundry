"use client"

import { useState } from "react"
import { Bell, Search, ChevronDown } from "./Icons"
import { useUser, UserButton } from "@clerk/clerk-react"

export default function Header() {
    const [showNotifications, setShowNotifications] = useState(false)
    const { user } = useUser()

    return (
        <header className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2 w-72">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 bg-transparent border-none focus:outline-none w-full text-sm"
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 relative"
                        >
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                                <div className="p-3 border-b border-gray-200">
                                    <h3 className="font-semibold">Notifications</h3>
                                </div>
                                <div className="max-h-64 overflow-y-auto">
                                    <div className="p-3 border-b border-gray-100 hover:bg-gray-50">
                                        <p className="text-sm font-medium">New order received</p>
                                        <p className="text-xs text-gray-500">10 minutes ago</p>
                                    </div>
                                    <div className="p-3 border-b border-gray-100 hover:bg-gray-50">
                                        <p className="text-sm font-medium">Delivery completed</p>
                                        <p className="text-xs text-gray-500">1 hour ago</p>
                                    </div>
                                    <div className="p-3 hover:bg-gray-50">
                                        <p className="text-sm font-medium">Customer feedback received</p>
                                        <p className="text-xs text-gray-500">3 hours ago</p>
                                    </div>
                                </div>
                                <div className="p-2 text-center border-t border-gray-200">
                                    <button className="text-sm text-sky-600 hover:text-sky-800">View all notifications</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center">
                        <UserButton />
                        <div className="ml-2 hidden md:block">
                            <p className="text-sm font-medium">{user?.fullName || "Administrator"}</p>
                        </div>
                        <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                    </div>
                </div>
            </div>
        </header>
    )
}