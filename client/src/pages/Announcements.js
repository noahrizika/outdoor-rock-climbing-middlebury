import React from "react";
import Announcement_Data from '../components/Announcement_Data';


const Announcements = () =>
{
    const baseURL = 'http://localhost:8383';

    return (
        <div className="main-text">
            <h1>Announcements</h1>
            <div className="announcement_data" id="announcements">
                <Announcement_Data baseURL={baseURL}/>
            </div>
        </div>
    );
}

export default Announcements;