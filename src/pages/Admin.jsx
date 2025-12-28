 import { useState } from "react";
import FleetCard from "../components/FleetCard";

function Admin() {
  const [fleet, setFleet] = useState([]);

  const addVehicle = () => {
    const newVehicle = {
      id: Date.now(),
      name: "Truck",
      status: "Available",
    };
    setFleet([...fleet, newVehicle]);
  };

  return (
    <div>
      <h2>Fleet Management Dashboard</h2>
      <button onClick={addVehicle}>Add Vehicle</button>

      {fleet.map((vehicle) => (
        <FleetCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}

export default Admin;
