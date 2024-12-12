// src/Components/AdminDashboard.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "./Auth-context";
import { Select } from "antd";

function AdminDashboard({ users, addUserCard, deleteUserCard }) {
  const { role } = useContext(AuthContext); // Get isAdmin from AuthContext
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [image, setImage] = useState(""); // New state to store the uploaded image

  if (role != "Mentor") {
    return <p>Access denied. Admins only.</p>; // Show this message if not admin
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Store the Base64 string of the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new card object and pass it to the addUserCard function
    const newUser = {
      name,
      description,
      linkedin,
      image, // Include the image in the new card object
    };
    addUserCard(newUser);
    // Clear form fields
    setName("");
    setDescription("");
    setLinkedin("");
    setImage("");
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-around items-center flex-no ">
      <div>
        <h3>Mentor card</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="LinkedIn URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Add Card
          </button>
        </form>
       </div>
        <div>
        <h3>Executive members card</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <Select
            type=" drop"
            placeholder="Description"
            value="Select"
            onChange={(e) => setDescription(e.target.value)}
            className="w-full"
          >
            <Select.Option >Select</Select.Option>
            <Select.Option value="Core Member">Core Member</Select.Option>
            <Select.Option value="Executive Member">Executive Member</Select.Option>
            </Select>
          <input
            type="text"
            placeholder="LinkedIn URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Add Card
          </button>
        </form>
        </div>
       <div>
        <h3>Core members card - large</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="LinkedIn URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Add Card
          </button>
        </form>
       </div>
       <div>
        <h3>Events Portrait</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="title" 
            value={linkedin} //title
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="date"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Add Card
          </button>
        </form>
       </div>
       <div>
        <h3>Events landscape</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="title"
            value={description} //title
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="date"
            placeholder="LinkedIn URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Add Card
          </button>
        </form>
       </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <h3 className="mt-10">Existing Member Cards</h3>
        <div className="w-full h-screen overflow-auto mt-5 flex flex-wrap">
          {users.map((user, index) => (
            <div key={index} className="w-1/3 p-2">
              <div className="border p-4 rounded shadow-md bg-white">
                <img
                  className="h-40 w-full object-cover rounded mb-2"
                  src={user.image || "https://via.placeholder.com/150"}
                  alt={user.name}
                />
                <h4 className="text-lg font-bold">{user.name}</h4>
                <p>{user.description}</p>
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  LinkedIn
                </a>
                <button
                  onClick={() => deleteUserCard(index)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
