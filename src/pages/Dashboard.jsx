import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import MapSection from "../components/dashboard/MapSection";
import ActiveAlertsPanel from "../components/dashboard/ActiveAlertsPanel";

const Dashboard = ({ tourists, alerts, zones }) => {
    const stats = {
        total: tourists.length,
        active: alerts.filter(a => a.status === "active").length,
        ack: alerts.filter(a => a.status === "acknowledged").length,
        dispatch: alerts.filter(a => a.status === "dispatch").length
    };
    
    return (
        <>
            <DashboardHeader />
            <StatsGrid stats={stats} alerts={alerts}/>

            <div className="grid grid-cols-[1fr_320px] gap-4">
                <MapSection tourists={tourists} alerts={alerts} zones={zones} />
                <ActiveAlertsPanel alerts={alerts} />
            </div>
        </>
    );
};

export default Dashboard;