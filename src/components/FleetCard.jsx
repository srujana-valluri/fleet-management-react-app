 import React from "react";

const images = {
  Auto: "https://www.nicepng.com/png/detail/90-901555_auto-rickshaw-png-file-auto-rickshaw.png",
  Car: "https://www.whoa.in/download/ferrari-superfast_hp-red-upcoming-car-hd-photos-wallpaper",
  Truck: "https://www.shutterstock.com/image-photo/semi-trailer-truck-isolated-on-600nw-2602452961.jpg",
  Bus: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/blue-bus?qlt=82&wid=1024&ts=1660212095501&dpr=off&fit=constrain",
};

const FleetCard = ({ fleet, updateDriver, toggleStatus, deleteFleet }) => {
  return (
    <div className="card">
      <img src={images[fleet.category]} alt={fleet.category} />

      <h3>{fleet.regNo}</h3>
      <p><b>Category:</b> {fleet.category}</p>
      <p><b>Driver:</b> {fleet.driver}</p>

      <p className={fleet.status === "Available" ? "status green" : "status red"}>
        {fleet.status}
      </p>

      <button className="btn blue" onClick={() => updateDriver(fleet.id)}>Update Driver</button>
      <button className="btn orange" onClick={() => toggleStatus(fleet.id)}>Toggle Status</button>
      <button className="btn red" onClick={() => deleteFleet(fleet.id)}>Delete</button>
    </div>
  );
};

export default React.memo(FleetCard);
