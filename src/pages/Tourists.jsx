import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import TouristTable from '../components/tourists/TouristTable';

const Tourists = ({tourists}) => {
    return (
        <>
            <DashboardHeader />
            <TouristTable tourists={tourists}/>
        </>
    );
}

export default Tourists;
