 import React, { useState, useCallback } from "react";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addFleet = () => {
    if (!form.regNo || !form.category || !form.driver) {
      alert("All fields are required");
      return;
    }

    setFleets([...fleets, { ...form, id: Date.now() }]);
    setForm({ regNo: "", category: "", driver: "", status: "Available" });
  };

  const updateDriver = useCallback((id) => {
    const name = prompt("Enter new driver name");
    if (!name || !name.trim()) return;

    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driver: name } : f))
    );
  }, []);

  const toggleStatus = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              status: f.status === "Available" ? "Unavailable" : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (window.confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }
  }, []);

  return (
    <div className="admin">
      <h2>Fleet Management Dashboard</h2>

      <div className="layout">
        <div className="sidebar">
          <h3>Add Fleet</h3>

          <input name="regNo" placeholder="Vehicle Reg No" value={form.regNo} onChange={handleChange} />

          <select name="category" value={form.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Auto">Auto</option>
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="Bus">Bus</option>
          </select>

          <input name="driver" placeholder="Driver Name" value={form.driver} onChange={handleChange} />

          <button onClick={addFleet}>Add Fleet</button>
        </div>

        <div className="content">
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              updateDriver={updateDriver}
              toggleStatus={toggleStatus}
              deleteFleet={deleteFleet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
