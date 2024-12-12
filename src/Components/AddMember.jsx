import { Button, Form, Input, message, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { addMember, fetchMemberById, updateMemberById } from "./Api";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

function AddMember() {
  const [image, setImage] = useState(null); // Manage image state separately
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true); // To show loading until data is fetched
  const [form] = Form.useForm();
  // Reset the form and the image state
  const onReset = () => {
    form.resetFields();
    setImage(null); // Reset image when resetting the form
  };
  const memberId = useParams();
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    message.success("Image added successfully, please submit the form");
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+91">+91</Option>
        <Option value="+92">+92</Option>
      </Select>
    </Form.Item>
  );
  useEffect(() => {
    if (memberId.memberId) {
      // Fetch member data when editing
      const fetchMemberData = async () => {
        try {
          const response = await fetchMemberById(memberId);
          const data = await response.json();
          setMember(data.member); // Set member data to pre-fill form
        } catch (error) {
          console.error("Error fetching member data:", error);
        } finally {
          setLoading(false); // Set loading to false when data is fetched
        }
      };
      fetchMemberData();
    } else {
      // If it's not an edit, set loading to false immediately
      setLoading(false);
    }
  }, [memberId]);

  const handleSubmit = async (values) => {
    try {
      const formDataToSend = new FormData();
      // Append all form values
      for (let key in values) {
        formDataToSend.append(key, values[key]);
      }
      // Append the image separately
      if (image) {
        formDataToSend.append("image", image);
      }

      // Call the API
      const response = memberId.memberId
        ? await updateMemberById(memberId, formDataToSend) // Update if memberId exists
        : await addMember(formDataToSend); // Add if no memberId (new member)
      message.success("member added successfully!");
      setTimeout(() => {
        navigate("/Members");
      }, [500]);
    } catch (error) {
      console.error("Error adding member:", error);
      message.error("Failed to add member. Please try again.");
    }
  };
  console.log(member);
  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }
  return (
    <div className="flex justify-center items-center min-h-screen py-32 bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h3 style={{ fontSize: "30px" }}>
          {memberId.memberId ? "Edit Member" : "Add Member"}
        </h3>
        <br />

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit} // Collect form values on submit
          initialValues={{
            prefix: "+91",
            firstName: member?.firstName || "",
            lastName: member?.lastName || "",
            title: member?.title || "",
            description: member?.description || "",
            email: member?.email || "",

            role: member?.role || "",
            linkedIn: member?.linkedIn || "",
          }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>

          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input placeholder="Enter title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input.TextArea placeholder="Enter description" rows={4} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "The input is not a valid email!",
              },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="LinkedIn"
            name="linkedIn"
            rules={[
              {
                required: true,
                message: "Please input your LinkedIn URL!",
              },
            ]}
          >
            <Input placeholder="Enter LinkedIn URL" />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: "Please input your role!",
              },
            ]}
          >
            <Select placeholder="Select placeholder">
              <Select.Option value="Core_Member">Core Member</Select.Option>
              <Select.Option value="Executive_Member">
                Executive Member
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please upload an image!",
              },
            ]}
          >
            <Input type="file" onChange={handleImageChange} accept="image/*" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full lg:w-auto"
              >
                Submit
              </Button>
              <Button
                htmlType="reset"
                className="w-full lg:w-auto"
                onClick={onReset}
              >
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddMember;
