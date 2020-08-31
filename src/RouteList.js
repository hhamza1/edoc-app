import React from 'react';

import {Switch, Route} from 'react-router-dom';



/** Containers/ Pages */
import PatientsList from './app/pages/patients-list/patients-list.component.jsx';
import Dashboard from './app/pages/dashboard/dashboard.component.jsx';
import Inventory from './app/pages/inventory/inventory.component.jsx';
import History from './app/pages/history/history.component.jsx';
import Calendar from './app/pages/calendar/calendar.component.jsx';
import Appointments from './app/pages/appointments/appointments.component.jsx';
import Finance from './app/pages/finance/finance.component.jsx';



const RouteList = () => {
    return (
        <Switch>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/appointments">
                <Appointments />
            </Route>
            <Route path="/calendar">
                <Calendar />
            </Route>
            <Route path="/patientsList">
                <PatientsList />
            </Route>
            <Route path="/finance">
                <Finance />
            </Route>
            <Route path="/inventory">
                <Inventory />
            </Route>
            <Route path="/history">
                <History />
            </Route>
        </Switch>
    );
}

export default RouteList;
