import React, { useState } from "react";
import api from "../api/axiosConfig";

function Form({ userId, countryId }) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    try {
      await api.post("/appointment", { userId, countryId, message });
      setStatus("Message sent successfully!");
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
        <textarea
          className="form-control"
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
