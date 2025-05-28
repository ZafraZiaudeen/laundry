"use client"

import {
    TrendingUp,
    TrendingDown,
    DollarSign,
    Users,
    ShoppingBasket,
    Truck,
    MoreHorizontal,
    Calendar,
    ArrowRight,
    Package,
} from "../components/Icons"
import { BarChart, LineChart } from "../components/Charts"

export default function Dashboard() {
    // Sample data for charts
    const revenueData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "This Week",
                data: [1200, 1900, 1500, 2200, 1800, 2500, 2100],
                backgroundColor: "rgba(2, 132, 199, 0.8)",
            },
            {
                label: "Last Week",
                data: [1000, 1700, 1400, 2000, 1600, 2300, 1900],
                backgroundColor: "rgba(186, 230, 253, 0.8)",
            },
        ],
    }

    const ordersData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Orders",
                data: [65, 78, 90, 85, 99, 105],
                borderColor: "rgba(2, 132, 199, 1)",
                tension: 0.4,
                fill: false,
            },
        ],
    }

    // Sample data for stats
    const stats = [
        {
            title: "Total Revenue",
            value: "$12,628",
            change: "+12.5%",
            increasing: true,
            icon: <DollarSign className="w-6 h-6" />,
        },
        {
            title: "Active Orders",
            value: "45",
            change: "+8.2%",
            increasing: true,
            icon: <ShoppingBasket className="w-6 h-6" />,
        },
        {
            title: "New Customers",
            value: "18",
            change: "+4.9%",
            increasing: true,
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: "Pending Deliveries",
            value: "12",
            change: "-2.3%",
            increasing: false,
            icon: <Truck className="w-6 h-6" />,
        },
    ]

    // Sample data for recent orders
    const recentOrders = [
        {
            id: "ORD-7892",
            customer: "Emma Wilson",
            service: "Wash & Fold",
            status: "Processing",
            date: "Today, 10:30 AM",
            amount: "$24.50",
            statusColor: "bg-yellow-100 text-yellow-800",
        },
        {
            id: "ORD-7891",
            customer: "Michael Brown",
            service: "Dry Cleaning",
            status: "Ready",
            date: "Today, 9:15 AM",
            amount: "$38.75",
            statusColor: "bg-green-100 text-green-800",
        },
        {
            id: "ORD-7890",
            customer: "Sophia Davis",
            service: "Wash & Iron",
            status: "Delivered",
            date: "Yesterday, 4:20 PM",
            amount: "$42.00",
            statusColor: "bg-blue-100 text-blue-800",
        },
        {
            id: "ORD-7889",
            customer: "James Miller",
            service: "Bedding",
            status: "Processing",
            date: "Yesterday, 1:45 PM",
            amount: "$35.25",
            statusColor: "bg-yellow-100 text-yellow-800",
        },
        {
            id: "ORD-7888",
            customer: "Olivia Johnson",
            service: "Dry Cleaning",
            status: "Ready",
            date: "Yesterday, 11:30 AM",
            amount: "$29.99",
            statusColor: "bg-green-100 text-green-800",
        },
    ]

    // Sample data for upcoming pickups
    const upcomingPickups = [
        {
            id: "PCK-4523",
            customer: "David Wilson",
            address: "123 Main St, Apt 4B",
            time: "Today, 2:00 PM - 4:00 PM",
        },
        {
            id: "PCK-4524",
            customer: "Sarah Johnson",
            address: "456 Oak Ave",
            time: "Today, 4:30 PM - 6:30 PM",
        },
        {
            id: "PCK-4525",
            customer: "Robert Davis",
            address: "789 Pine Rd, Suite 12",
            time: "Tomorrow, 9:00 AM - 11:00 AM",
        },
    ]

    return (
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-600">Welcome back, here's what's happening with your laundry business today.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-sky-100 p-3 rounded-lg">
                                <div className="text-sky-600">{stat.icon}</div>
                            </div>
                            <span
                                className={`text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center ${
                                    stat.increasing ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }`}
                            >
                                {stat.increasing ? (
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                ) : (
                                    <TrendingDown className="w-3 h-3 mr-1" />
                                )}
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-800">Revenue Overview</h3>
                        <div className="flex items-center">
                            <select className="text-sm border-gray-300 rounded-md">
                                <option>This Week</option>
                                <option>Last Week</option>
                                <option>This Month</option>
                            </select>
                        </div>
                    </div>
                    <div className="h-64">
                        <BarChart data={revenueData} />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-800">Orders Trend</h3>
                        <div className="flex items-center">
                            <select className="text-sm border-gray-300 rounded-md">
                                <option>Last 6 Months</option>
                                <option>Last 3 Months</option>
                                <option>Last Year</option>
                            </select>
                        </div>
                    </div>
                    <div className="h-64">
                        <LineChart data={ordersData} />
                    </div>
                </div>
            </div>

            {/* Recent Orders and Upcoming Pickups */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800">Recent Orders</h3>
                            <button className="text-sky-600 hover:text-sky-800 text-sm font-medium">View All</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <th className="px-6 py-3">Order ID</th>
                                    <th className="px-6 py-3">Customer</th>
                                    <th className="px-6 py-3">Service</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Amount</th>
                                    <th className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.customer}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">{order.service}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs rounded-full ${order.statusColor}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.amount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800">Upcoming Pickups</h3>
                            <button className="text-sky-600 hover:text-sky-800 text-sm font-medium">View Schedule</button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {upcomingPickups.map((pickup) => (
                                <div key={pickup.id} className="flex items-start p-3 border border-gray-100 rounded-lg">
                                    <div className="bg-sky-100 p-2 rounded-lg mr-4">
                                        <Calendar className="w-5 h-5 text-sky-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-sm">{pickup.customer}</p>
                                        <p className="text-xs text-gray-500">{pickup.address}</p>
                                        <p className="text-xs text-gray-500 mt-1">{pickup.time}</p>
                                    </div>
                                    <button className="text-sky-600 hover:text-sky-800">
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="bg-sky-100 p-3 rounded-full mb-2">
                            <ShoppingBasket className="w-5 h-5 text-sky-600" />
                        </div>
                        <span className="text-sm font-medium">New Order</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="bg-sky-100 p-3 rounded-full mb-2">
                            <Truck className="w-5 h-5 text-sky-600" />
                        </div>
                        <span className="text-sm font-medium">Schedule Pickup</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="bg-sky-100 p-3 rounded-full mb-2">
                            <Users className="w-5 h-5 text-sky-600" />
                        </div>
                        <span className="text-sm font-medium">Add Customer</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="bg-sky-100 p-3 rounded-full mb-2">
                            <Package className="w-5 h-5 text-sky-600" />
                        </div>
                        <span className="text-sm font-medium">Manage Inventory</span>
                    </button>
                </div>
            </div>
        </main>
    )
}