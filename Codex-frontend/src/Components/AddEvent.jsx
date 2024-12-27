import { Button, DatePicker, Form, Input, message, Select, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "./Api.jsx";

const { Option } = Select;

function AddEvent() {
  const { addEvent, fetchEventById, updateEventById } = Api();
  const [image, setImage] = useState(null); // Manage image state separately
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true); // To show loading until data is fetched
  const [form] = Form.useForm();
  const [imageType, setImageType] = useState(null); // Track image orientation

  // Reset the form and the image state
  const onReset = () => {
    form.resetFields();
    setImage(null); // Reset image when resetting the form
    setImageType(null); // Reset image type
  };
  const eventId = useParams();
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        if (img.width > img.height) {
          setImageType("landscape");
        } else {
          setImageType("portrait");
        }
        setImage(file);
        message.success("Image added successfully, please submit the form");
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
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
    if (eventId.eventId) {
      // Fetch event data when editing
      const fetchEventData = async () => {
        try {
          const response = await fetchEventById(eventId);
          const data = await response.json();
          setEvent(data.event); // Set event data to pre-fill form
        } catch (error) {
          console.error("Error fetching event data:", error);
        } finally {
          setLoading(false); // Set loading to false when data is fetched
        }
      };
      fetchEventData();
    } else {
      // If it's not an edit, set loading to false immediately
      setLoading(false);
    }
  }, [eventId]);

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
        formDataToSend.append("type", imageType); // Include the image type
      }

      // Call the API
      const response = eventId.eventId
        ? await updateEventById(eventId, formDataToSend) // Update if eventId exists
        : await addEvent(formDataToSend); // Add if no eventId (new event)
      message.success("event added successfully!");
      setTimeout(() => {
        navigate("/manage/events");
      }, [500]);
    } catch (error) {
      console.error("Error adding event:", error);
      message.error("Failed to add event. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }
  return (
    <div className="flex justify-center items-center min-h-screen py-32 bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h3 style={{ fontSize: "30px" }}>
          {eventId.eventId ? "Edit Event" : "Add Event"}
        </h3>
        <br />

        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit} // Collect form values on submit
          initialValues={{
            prefix: "+91",
            title: event?.title || "",
            description: event?.description || "",
            email: event?.email || "",
            type: event?.type || "",
          }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              !eventId.eventId && {
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
              !eventId.eventId && {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input.TextArea placeholder="Enter description" rows={4} />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[
              !eventId.eventId && {
                required: true,
                message: "Please input date!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Image"
            name="image"
            rules={[
              !eventId.eventId && {
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

export default AddEvent;
