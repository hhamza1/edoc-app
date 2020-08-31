import React from 'react';



import './patients-list.styles.scss';
import CustomBtn from '../../components/custom-btn/custom-btn.component';



const PatientsList = () => {
    return (
        <div className="patients-list">
            <h1>Patients List</h1>
            <div className="cta-group">
                <CustomBtn href="#" title="Show Filters"/>
                <CustomBtn href="#" title="Add Patient" reverse/>
            </div>
            <div className="patients-list__list">
                Patients list down here
            </div>
        </div>
    );
}

export default PatientsList;