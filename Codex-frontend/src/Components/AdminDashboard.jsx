// src/Components/AdminDashboard.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "./Auth-context";

import { Button, Card, Modal } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

function AdminDashboard({ users, addUserCard, deleteUserCard }) {
  const { role } = useContext(AuthContext); // Get isAdmin from AuthContext
  const auth = useContext(AuthContext);
  if (role != "Mentor") {
    return <p>Access denied. Admins only.</p>; // Show this message if not admin
  }
  const navigate = useNavigate();
  // State to control the modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle logout confirmation
  const handleOk = () => {
    auth.logout(); // Call the logout function
    setIsModalVisible(false); // Close the modal
  };

  // Function to handle modal cancellation
  const handleCancel = () => {
    setIsModalVisible(false); // Close the modal without logging out
  };

  return (
    <div className="bg-black text-white relative">
      <div>
        <h1
          className="bg-white text-black w-fit px-[2vw] py-[1vh] rounded-full absolute top-[15vh] right-[5vw] cursor-pointer"
          onClick={showModal}
        >
          Logout
        </h1>
      </div>
      <div className="w-screen h-screen flex justify-evenly items-center flex-no ">
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Button onClick={() => navigate("/mentors")}>Manage</Button>,
          ]}
        >
          <Meta
            // avatar={
            //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            // }
            title="Mentors"
            // description="This is the description"
          />
        </Card>
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Button onClick={() => navigate("/members")}>Manage</Button>,
          ]}
        >
          <Meta
            // avatar={
            //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            // }
            title="Core/Executive members"
            // description="This is the description"
          />
        </Card>
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Button onClick={() => navigate("/manage/events")}>Manage</Button>,
          ]}
        >
          <Meta
            // avatar={
            //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            // }
            title="Events"
            // description="This is the description"
          />
        </Card>
      </div>
      <Modal
        title="Confirm Logout"
        visible={isModalVisible}
        onOk={handleOk} // Logout on confirm
        onCancel={handleCancel} // Close modal without logging out
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </div>
  );
}

export default AdminDashboard;
