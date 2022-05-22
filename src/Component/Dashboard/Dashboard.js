import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardSlider from '../pages/DashBoardSlider';

const Dashboard = () => {
    return (
        <div>
            <DashBoardSlider>
                <Outlet></Outlet>
            </DashBoardSlider>
        </div>
    );
};

export default Dashboard;