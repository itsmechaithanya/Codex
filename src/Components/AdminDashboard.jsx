// src/Components/AdminDashboard.jsx
import React, { useState, useContext } from 'react';
import AuthContext from '../utility/AuthContext';
import CardSM from './CardSM';

function AdminDashboard({ addCard, deleteCard, users }) {
  const { isAdmin } = useContext(AuthContext);
  const [newCard, setNewCard] = useState({ name: '', description: '', linkedin: '' });

  if (!isAdmin) {
    return <p>Access denied. Admins only.</p>;
  }

  const handleAddCard = () => {
    addCard(newCard);
    setNewCard({ name: '', description: '', linkedin: '' });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Add a New Member Card</h3>
      <input
        type="text"
        placeholder="Name"
        value={newCard.name}
        onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newCard.description}
        onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="LinkedIn URL"
        value={newCard.linkedin}
        onChange={(e) => setNewCard({ ...newCard, linkedin: e.target.value })}
      />
      <button onClick={handleAddCard}>Add Card</button>

      <h3>Manage Existing Cards</h3>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <CardSM Users={[user]} />
            <button onClick={() => deleteCard(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;