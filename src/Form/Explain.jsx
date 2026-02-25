import React, { useState } from "react";

export default function Form() {
  // 1️⃣ Stores input values while typing
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2️⃣ Stores data after form is submitted
  const [submittedData, setSubmittedData] = useState(null);

  // 3️⃣ Runs when user types in input fields
  const handleChange = (e) => {
    // Updates only the changed field using its "name"
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4️⃣ Runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh

    setSubmittedData(formData); // Save current form data
    setFormData({ name: "", email: "", message: "" }); // Clear input fields
  };

  return (
    <div>
      <h2>Contact Form</h2>

      {/* 5️⃣ Form submit triggers handleSubmit */}
      <form onSubmit={handleSubmit}>
        {/* 6️⃣ Controlled input (value comes from state) */}
        <input
          type="text"
          name="name"
          value={formData.name} // Gets value from state
          onChange={handleChange} // Updates state on typing
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />

        <button type="submit">Submit</button>
      </form>

      {/* 7️⃣ Show submitted data only if it exists */}
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}
