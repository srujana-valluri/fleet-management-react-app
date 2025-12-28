 import React, { useState, useCallback } from "react";
import FleetCard from "./FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    availability: "Available",
  });

  // Controlled form handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add Fleet
  const handleAddFleet = () => {
    const { regNo, category, driver } = form;
    if (!regNo || !category || !driver) {
      alert("Please fill all required fields!");
      return;
    }

    const newFleet = {
      id: Date.now(), // unique id
      ...form,
    };

    setFleets((prev) => [...prev, newFleet]);
    setForm({ regNo: "", category: "", driver: "", availability: "Available" });
  };

  // Handlers for FleetCard actions
  const updateDriver = useCallback((id) => {
    const newDriver = prompt("Enter new driver name");
    if (!newDriver || !newDriver.trim()) return;
    setFleets((prev) =>
      prev.map((fleet) =>
        fleet.id === id ? { ...fleet, driver: newDriver } : fleet
      )
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((fleet) =>
        fleet.id === id
          ? {
              ...fleet,
              availability:
                fleet.availability === "Available" ? "Unavailable" : "Available",
            }
          : fleet
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (!window.confirm("Are you sure to delete this vehicle?")) return;
    setFleets((prev) => prev.filter((fleet) => fleet.id !== id));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "300px", padding: "10px", borderRight: "1px solid gray" }}>
        <h3>Add Fleet</h3>
        <input
          type="text"
          placeholder="Vehicle Reg No"
          name="regNo"
          value={form.regNo}
          onChange={handleChange}
        />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Auto">Auto</option>
          <option value="Car">Car</option>
          <option value="Truck">Truck</option>
          <option value="Bus">Bus</option>
        </select>
        <input
          type="text"
          placeholder="Driver Name"
          name="driver"
          value={form.driver}
          onChange={handleChange}
        />
        <select
          name="availability"
          value={form.availability}
          onChange={handleChange}
        >
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
        <button onClick={handleAddFleet}>Add Fleet</button>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "10px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {fleets.map((fleet) => (
          <FleetCard
            key={fleet.id}
            fleet={fleet}
            updateDriver={updateDriver}
            toggleAvailability={toggleAvailability}
            deleteFleet={deleteFleet}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
