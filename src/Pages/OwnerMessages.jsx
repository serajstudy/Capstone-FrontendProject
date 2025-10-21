import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";

function OwnerMessages() {
  const [messages, setMessages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  // Fetch all messages
  const fetchMessages = async () => {
    try {
      const res = await api.get("/appointment");
      setMessages(res.data);
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Delete message
  const handleDelete = async (id) => {
    try {
      await api.delete(`/appointment/${id}`);
      fetchMessages(); // Refresh list
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  // Start editing
  const handleEdit = (id, message) => {
    setEditingId(id);
    setEditMessage(message);
  };

  // Save edited message
  const handleSave = async (id) => {
    try {
      await api.put(`/appointment/${id}`, { message: editMessage });
      setEditingId(null);
      setEditMessage("");
      fetchMessages(); // Refresh list
    } catch (err) {
      console.error("Error updating message:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Customer Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.name || "N/A"}</td>
                <td>{msg.email || "N/A"}</td>
                <td>
                  {editingId === msg._id ? (
                    <input
                      type="text"
                      value={editMessage}
                      onChange={(e) => setEditMessage(e.target.value)}
                    />
                  ) : (
                    msg.message
                  )}
                </td>
                <td>
                  {editingId === msg._id ? (
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleSave(msg._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleEdit(msg._id, msg.message)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(msg._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OwnerMessages;
