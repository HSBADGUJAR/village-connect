import React, { useState } from "react";

const Service = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Water Supply", description: "Daily clean water service" },
    { id: 2, name: "Village Cleaning", description: "Weekly cleaning program" }
  ]);

  const [newService, setNewService] = useState({
    name: "",
    description: ""
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Handle form input
  const handleChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  // Add service
  const addService = (e) => {
    e.preventDefault();
    if (newService.name.trim() && newService.description.trim()) {
      const serviceToAdd = {
        id: Date.now(),
        name: newService.name,
        description: newService.description
      };
      setServices([...services, serviceToAdd]);
      setNewService({ name: "", description: "" });
    } else {
      alert("Please fill in both fields");
    }
  };

  // Filter services by search term
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Village Services</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search services..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "8px",
          width: "100%",
          maxWidth: "300px"
        }}
      />

      {/* Form to add service */}
      <form onSubmit={addService} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={newService.name}
          onChange={handleChange}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="text"
          name="description"
          placeholder="Service Description"
          value={newService.description}
          onChange={handleChange}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 15px" }}>
          Add Service
        </button>
      </form>

      {/* Display Services */}
      <ul>
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <li key={service.id} style={{ marginBottom: "10px" }}>
              <strong>{service.name}</strong> - {service.description}
            </li>
          ))
        ) : (
          <p>No services found</p>
        )}
      </ul>
    </div>
  );
};

export default Service;
