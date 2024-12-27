import React, { useEffect, useState } from "react";
import { Button, Card, Dropdown, Menu, message, Modal } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import AddMentor from "./AddMentor";
import Api from "./Api";
const { Meta } = Card;

function Mentors() {
  const { deleteMentor, fetchMentors } = Api();
  const [mentors, setMentors] = useState([]);
  const [actionToShow, setActionToShow] = useState(null); // State to store selected action
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // State to control delete button loading

  const navigate = useNavigate();
  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const response = await fetchMentors();
        const data = await response.json();
        setMentors(data?.mentors);
      } catch (err) {
        message.error("Something went wrong while fetching the data");
      }
    };

    fetchMentorData();
  }, []);

  const handleMenuClick = (key) => {
    setActionToShow(key); // Set the action to show
  };
  const handleDeleteClick = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalVisible(true);
  };
  const handleDelete = async (mentor) => {
    if (!selectedMentor) return;
    setIsDeleting(true); // Start loading

    try {
      await deleteMentor(selectedMentor._id); // Call delete function with mentor id

      message.success("Mentor successfully deleted");
      // Update the mentor list by removing the deleted mentor
      setMentors(mentors.filter((item) => item._id !== selectedMentor._id)); // Use 'item' instead of 'mentor'
      setActionToShow(null); // Reset action
      setIsModalVisible(false);
    } catch (err) {
      message.error("Something went wrong while deleting the mentor");
    } finally {
      setIsDeleting(false); // Start loading
    }
  };

  const menu = () => (
    <Menu onClick={({ key }) => handleMenuClick(key)}>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="flex justify-end mt-32 mr-20 gap-2">
        <Button onClick={() => navigate("/add/mentor")}>Add Mentor</Button>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button>
            <SettingOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="w-full h-auto flex justify-evenly items-center flex-no py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src={`${
                    import.meta.env.REACT_APP_BACKEND_URL + "/" + mentor?.image
                  }`}
                />
              }
              actions={
                actionToShow === "edit"
                  ? [
                      <Button
                        onClick={() => navigate(`/edit/mentor/${mentor._id}`)}
                      >
                        Edit
                      </Button>,
                    ]
                  : actionToShow === "delete"
                  ? [
                      <Button onClick={() => handleDeleteClick(mentor)}>
                        Delete
                      </Button>,
                    ]
                  : []
              }
            >
              <Meta
                title="Mentors"
                // description="This is the description"
              />
            </Card>
          ))}
        </div>
      </div>
      <Modal
        title="Delete Mentor"
        visible={isModalVisible}
        // loading
        onOk={handleDelete}
        onCancel={() => setIsModalVisible(false)}
        okText="Yes, Delete"
        cancelText="Cancel"
        confirmLoading={isDeleting} // Apply loading state to the OK button
      >
        <p>Are you sure you want to delete this mentor?</p>
      </Modal>
    </div>
  );
}

export default Mentors;
