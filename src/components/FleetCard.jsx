 import React from "react";

const FleetCard = ({ fleet, updateDriver, toggleAvailability, deleteFleet }) => {
  if (!fleet) return null; // safety check

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      <img
        src="https://via.placeholder.com/150"
        alt="vehicle"
        style={{ width: "100%" }}
      />
      <h4>{fleet.regNo}</h4>
      <p>Category: {fleet.category}</p>
      <p>Driver: {fleet.driver}</p>
      <p>Availability: {fleet.availability}</p>
      <button onClick={() => updateDriver(fleet.id)}>Update Driver</button>
      <button onClick={() => toggleAvailability(fleet.id)}>Toggle Availability</button>
      <button onClick={() => deleteFleet(fleet.id)}>Delete Vehicle</button>
    </div>
  );
};

export default React.memo(FleetCard);
