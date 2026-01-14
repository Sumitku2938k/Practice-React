import { useParams, useNavigate } from "react-router-dom";
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { User } from 'lucide-react';

const TouristDetail = ({ tourists }) => {
    const { touristId } = useParams();
    const navigate = useNavigate();

    const tourist = tourists.find(t => t.id === touristId);

    if (!tourist) {
        return (
            <div className="text-red-400">Tourist not found</div>
        );
    }

    return (
        <>
            <DashboardHeader />
            <div className="grid grid-cols-[340px_1fr] gap-6">
                {/* LEFT PANEL */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                    <div className="flex items-center gap-4 pb-4 border-b border-gray-800">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700">
                            <User size={32} className="text-gray-300" />
                        </div>
                        <h2 className="text-lg font-semibold">{tourist.name}</h2>
                        <p className="text-sm text-gray-400">{tourist.id}</p>
                    </div>

                    <div className="mt-4 space-y-3 text-sm">
                        <p><span className="text-gray-400">Itinerary:</span> {tourist.itinerary}</p>
                        <p><span className="text-gray-400">Emergency:</span> {tourist.emergencyContact}</p>
                        <p><span className="text-gray-400">Last Seen:</span> {new Date(tourist.lastSeen).toLocaleString()}</p>
                    </div>

                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold text-sm">Generate E-FIR PDF</button>
                </div>

                {/* RIGHT PANEL */}
                <div className="grid grid-rows-[1fr_auto] gap-4">
                    {/* MAP CARD */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                        {/* MapView yahan aayega */}
                        <div className="h-105 flex items-center justify-center text-gray-500">Map View</div>
                    </div>

                    {/* ALERT HISTORY */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                        <h3 className="text-sm font-semibold mb-3">Alert History</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-gray-800/60 px-4 py-2 rounded-md">
                                <div>
                                    <p className="text-sm font-medium">SOS – A-T-1001-1</p>
                                    <p className="text-xs text-gray-400">13/1/2026, 3:55:41 am</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-red-600/20 text-red-400">active</span>
                            </div>

                            <div className="flex items-center justify-between bg-gray-800/60 px-4 py-2 rounded-md">
                                <div>
                                    <p className="text-sm font-medium">Geo-fence – A-T-1001-2</p>
                                    <p className="text-xs text-gray-400">12/1/2026, 3:55:41 am</p>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-green-600/20 text-green-400">acknowledged</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TouristDetail;
