import { Button, Form, Input, message, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { addMentor, fetchMentorById, updateMentorById } from "./Api";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

function AddMentor() {
  const [image, setImage] = useState(null); // Manage image state separately
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true); // To show loading until data is fetched
  const [form] = Form.useForm();
  // Reset the form and the image state
  const onReset = () => {
    form.resetFields();
    setImage(null); // Reset image when resetting the form
  };
  const mentorId = useParams();
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
    if (mentorId.mentorId) {
      // Fetch mentor data when editing
      const fetchMentorData = async () => {
        try {
          const response = await fetchMentorById(mentorId);
          const data = await response.json();
          setMentor(data.mentor); // Set mentor data to pre-fill form
        } catch (error) {
          console.error("Error fetching mentor data:", error);
        } finally {
          setLoading(false); // Set loading to false when data is fetched
        }
      };
      fetchMentorData();
    } else {
      // If it's not an edit, set loading to false immediately
      setLoading(false);
    }
  }, [mentorId]);

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
      const response = mentorId.mentorId
        ? await updateMentorById(mentorId, formDataToSend) // Update if mentorId exists
        : await addMentor(formDataToSend); // Add if no mentorId (new mentor)
      message.success("Mentor added successfully!");
      setTimeout(() => {
        navigate("/mentors");
      }, [500]);
    } catch (error) {
      console.error("Error adding mentor:", error);
      message.error("Failed to add mentor. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }
  return (
    <div className="flex justify-center items-center min-h-screen py-32 bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h3 style={{ fontSize: "30px" }}>
          {mentorId.mentorId ? "Edit Mentor" : "Add Mentor"}
        </h3>
        <br />

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit} // Collect form values on submit
          initialValues={{
            prefix: "+91",
            firstName: mentor?.firstName || "",
            lastName: mentor?.lastName || "",
            title: mentor?.title || "",
            description: mentor?.description || "",
            email: mentor?.email || "",
            password: mentor?.password || "",
            mobile: mentor?.mobile || "",
            linkedIn: mentor?.linkedIn || "",
          }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              !mentorId.mentorId && {
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
              !mentorId.mentorId && {
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
              !mentorId.mentorId && {
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
              !mentorId.mentorId && {
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
              !mentorId.mentorId && {
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
            label="Password"
            name="password"
            rules={[
              !mentorId.mentorId && {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="mobile"
            rules={[
              !mentorId.mentorId && {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
              placeholder="Enter phone number"
            />
          </Form.Item>

          <Form.Item
            label="LinkedIn"
            name="linkedIn"
            rules={[
              !mentorId.mentorId && {
                required: true,
                message: "Please input your LinkedIn URL!",
              },
            ]}
          >
            <Input placeholder="Enter LinkedIn URL" />
          </Form.Item>

          <Form.Item
            label="Image"
            name="image"
            rules={[
              !mentorId.mentorId && {
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

export default AddMentor;
