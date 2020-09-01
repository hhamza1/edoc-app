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
                <table className="table-list">
                    <thead>
                        <tr>
                            <td>
                                <input type="checkbox" name="patient" />
                            </td>
                            <td>ID</td>
                            <td>
                                Picture
                            </td>
                            <td>Full Name</td>
                            <td>CIN</td>
                            <td>Birth Date</td>
                            <td>Phone Number</td>
                            <td>Last Visit</td>
                        </tr>
                    </thead>
                    {/**Body section of the list */}
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" name="patient" />
                            </td>
                            <td>1</td>
                            <td>
                                <img src="#" alt="Patient profile" />
                            </td>
                            <td>Jon Snow</td>
                            <td>BB123456</td>
                            <td>31-10-1988</td>
                            <td>212-555-8246</td>
                            <td>Monday, 16th June 2020</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="patient" />
                            </td>
                            <td>1</td>
                            <td>
                                <img src="#" alt="Patient profile" />
                            </td>
                            <td>Jon Snow</td>
                            <td>BB123456</td>
                            <td>31-10-1988</td>
                            <td>212-555-8246</td>
                            <td>Monday, 16th June 2020</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox" name="patient" />
                            </td>
                            <td>1</td>
                            <td>
                                <img src="#" alt="Patient profile" />
                            </td>
                            <td>Jon Snow</td>
                            <td>BB123456</td>
                            <td>31-10-1988</td>
                            <td>212-555-8246</td>
                            <td>Monday, 16th June 2020</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PatientsList;