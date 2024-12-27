import React, { useEffect, useState } from "react";
import { Button, Card, Dropdown, Menu, message, Modal } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import Api from "./Api";

const { Meta } = Card;

function ManageEvents() {
  const { deleteEvent, fetchEvents } = Api();
  const [events, setEvents] = useState([]);
  const [actionToShow, setActionToShow] = useState(null); // State to store selected action
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // State to control delete button loading

  const navigate = useNavigate();
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetchEvents();
        const data = await response.json();
        setEvents(data?.events);
      } catch (err) {
        message.error("Something went wrong while fetching the data");
      }
    };

    fetchEventData();
  }, []);

  const handleMenuClick = (key) => {
    setActionToShow(key); // Set the action to show
  };
  const handleDeleteClick = (event) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
  };
  const handleDelete = async (event) => {
    if (!selectedEvent) return;
    setIsDeleting(true); // Start loading

    try {
      await deleteEvent(selectedEvent._id); // Call delete function with event id

      message.success("Event successfully deleted");
      // Update the event list by removing the deleted event
      setEvents(events.filter((item) => item._id !== selectedEvent._id)); // Use 'item' instead of 'event'
      setActionToShow(null); // Reset action
      setIsModalVisible(false);
    } catch (err) {
      message.error("Something went wrong while deleting the event");
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
        <Button onClick={() => navigate("/add/event")}>Add Event</Button>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button>
            <SettingOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="w-full h-auto flex justify-evenly items-center flex-no py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src={`${
                    import.meta.env.REACT_APP_BACKEND_URL + "/" + event?.image
                  }`}
                />
              }
              actions={
                actionToShow === "edit"
                  ? [
                      <Button
                        onClick={() => navigate(`/edit/event/${event._id}`)}
                      >
                        Edit
                      </Button>,
                    ]
                  : actionToShow === "delete"
                  ? [
                      <Button onClick={() => handleDeleteClick(event)}>
                        Delete
                      </Button>,
                    ]
                  : []
              }
            >
              <Meta
                title="Events"
                // description="This is the description"
              />
            </Card>
          ))}
        </div>
      </div>
      <Modal
        title="Delete Event"
        visible={isModalVisible}
        // loading
        onOk={handleDelete}
        onCancel={() => setIsModalVisible(false)}
        okText="Yes, Delete"
        cancelText="Cancel"
        confirmLoading={isDeleting} // Apply loading state to the OK button
      >
        <p>Are you sure you want to delete this event?</p>
      </Modal>
    </div>
  );
}

export default ManageEvents;
