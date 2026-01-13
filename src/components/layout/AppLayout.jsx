import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Globe, Users, TriangleAlert, ChartColumn, MapPin } from "lucide-react";

const AppLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-[240px_1fr]">
            <aside className="bg-gray-900 text-white p-4 relative">
                <div className="space-y-1 border-b pb-3">
                    <h2>Smart Tourist Safety</h2>
                    <h1 className="text-xl font-bold">Admin Panel</h1>
                </div>
                <nav className="space-y-2">
                    <NavLink to="/" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800">
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to="/tourists" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800">
                        <Users size={18} />
                        <span>Tourists</span>
                    </NavLink>

                    <NavLink to="/alerts" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800">
                        <TriangleAlert size={18} />
                        <span>Alerts</span>
                    </NavLink>

                    <NavLink to="/reports" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800">
                        <ChartColumn size={18} />
                        <span>Reports</span>
                    </NavLink>

                    <NavLink to="/riskyzones" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800">
                        <MapPin size={18} />
                        <span>Risky Zones</span>
                    </NavLink>
                </nav>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] border-t pt-5 flex items-center gap-2">
                    <Globe size={20} className="text-white shrink-0" />
                    <select className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm shadow">
                        <option className="bg-gray-900" value={"English"}>English</option>
                        <option className="bg-gray-900" value={"Hindi"}>Hindi</option>
                    </select>
                </div>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
