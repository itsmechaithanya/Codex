import React, { useEffect, useState } from "react";
import { Button, Card, Dropdown, Menu, message, Modal } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import Api from "./Api";

const { Meta } = Card;

function Members() {
  const { deleteMember, fetchMembers } = Api();
  const [members, setMembers] = useState([]);
  const [actionToShow, setActionToShow] = useState(null); // State to store selected action
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // State to control delete button loading

  const navigate = useNavigate();
  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await fetchMembers();
        const data = await response.json();
        setMembers(data?.members);
      } catch (err) {
        message.error("Something went wrong while fetching the data");
      }
    };

    fetchMemberData();
  }, []);

  const handleMenuClick = (key) => {
    setActionToShow(key); // Set the action to show
  };
  const handleDeleteClick = (member) => {
    setSelectedMember(member);
    setIsModalVisible(true);
  };
  const handleDelete = async (member) => {
    if (!selectedMember) return;
    setIsDeleting(true); // Start loading

    try {
      await deleteMember(selectedMember._id); // Call delete function with member id

      message.success("Member successfully deleted");
      // Update the member list by removing the deleted member
      setMembers(members.filter((item) => item._id !== selectedMember._id)); // Use 'item' instead of 'member'
      setActionToShow(null); // Reset action
      setIsModalVisible(false);
    } catch (err) {
      message.error("Something went wrong while deleting the member");
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
        <Button onClick={() => navigate("/add/member")}>Add Member</Button>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button>
            <SettingOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="w-full h-auto flex justify-evenly items-center flex-no py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <Card
              key={index}
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src={`${
                    import.meta.env.REACT_APP_BACKEND_URL + "/" + member?.image
                  }`}
                />
              }
              actions={
                actionToShow === "edit"
                  ? [
                      <Button
                        onClick={() => navigate(`/edit/member/${member._id}`)}
                      >
                        Edit
                      </Button>,
                    ]
                  : actionToShow === "delete"
                  ? [
                      <Button onClick={() => handleDeleteClick(member)}>
                        Delete
                      </Button>,
                    ]
                  : []
              }
            >
              <Meta
                title={member?.firstName + " " + member?.lastName}
                // description="This is the description"
              />
            </Card>
          ))}
        </div>
      </div>
      <Modal
        title="Delete Member"
        visible={isModalVisible}
        // loading
        onOk={handleDelete}
        onCancel={() => setIsModalVisible(false)}
        okText="Yes, Delete"
        cancelText="Cancel"
        confirmLoading={isDeleting} // Apply loading state to the OK button
      >
        <p>Are you sure you want to delete this member?</p>
      </Modal>
    </div>
  );
}

export default Members;
