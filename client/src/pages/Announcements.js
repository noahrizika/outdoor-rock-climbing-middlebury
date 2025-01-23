import React from "react";
import Announcement_Data from "../components/Announcement_Data";

const Announcements = () => {
  const baseURL = "http://localhost:3000";

  return (
    <div className="main-text">
      <h1>Announcements</h1>
      <div className="announcement_data" id="announcements">
        <Announcement_Data baseURL={baseURL} />
      </div>
    </div>
  );
};

export default Announcements;
