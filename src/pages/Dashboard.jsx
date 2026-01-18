import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import MapSection from "../components/dashboard/MapSection";
import ActiveAlertsPanel from "../components/dashboard/ActiveAlertsPanel";

const Dashboard = ({ tourists, alerts, zones, updateAlertStatus }) => {
    
    const stats = {
        total: tourists.length,
        active: alerts.filter(a => a.status === "active").length,
        ack: alerts.filter(a => a.status === "acknowledged").length,
        dispatched: alerts.filter(a => a.status === "dispatched").length
    };

    const activeAlerts = alerts.filter(a => a.status === "active");
    
    return (
        <>
            <DashboardHeader />

            <div className="grid grid-cols-[1fr_370px] gap-4">
                <div>
                    <StatsGrid stats={stats} />
                    <MapSection tourists={tourists} alerts={alerts} zones={zones} />
                </div>

                <ActiveAlertsPanel alerts={activeAlerts} updateAlertStatus={updateAlertStatus} />
            </div>
        </>
    );
};

export default Dashboard;