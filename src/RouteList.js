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
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/appointments" component={Appointments} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/patientsList" component={PatientsList} />
            <Route path="/finance" component={Finance} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/history" component={History} />
        </Switch>
    );
}

export default RouteList;
