import React from "react";

const FleetCard = React.memo(
  ({ fleet, updateDriver, toggleStatus, deleteFleet }) => {
    console.log("Rendered:", fleet.id);

    return (
      <div className="card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/743/743922.png"
          alt="vehicle"
        />

        <p><b>Reg No:</b> {fleet.regNo}</p>
        <p><b>Category:</b> {fleet.category}</p>
        <p><b>Driver:</b> {fleet.driver}</p>
        <p><b>Status:</b> {fleet.status}</p>

        <button onClick={() => updateDriver(fleet.id)}>
          Update Driver
        </button>

        <button onClick={() => toggleStatus(fleet.id)}>
          Change Status
        </button>

        <button onClick={() => deleteFleet(fleet.id)}>
          Delete
        </button>
      </div>
    );
  }
);

export default FleetCard;
