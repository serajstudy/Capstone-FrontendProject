import React, { useState } from "react";
import api from "../api/axiosConfig";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      await api.post("/appointment", { name, email, message });
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="form-box mt-4">
      <h5>Send a Message</h5>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          rows="3"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">Send</button>
      </form>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}

export default Form;
