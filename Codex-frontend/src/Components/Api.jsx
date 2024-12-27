import { useContext } from "react";
import { AuthContext } from "./Auth-context";

const Api = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuthApi must be used within an AuthProvider");
  }

  const BASE_URL = import.meta.env.REACT_APP_BACKEND_URL;
  const login = async (data) => {
    const response = await fetch(`${BASE_URL}/api/codex/mentor/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to authenticate");
    }
    return response;
  };
  // Mentor apis
  const fetchMentors = async () => {
    const response = await fetch(
      `${BASE_URL}/api/codex/mentor/get/all/mentors`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const fetchMentorById = async (id) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/mentor/get/mentor/byid/${id.mentorId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const updateMentorById = async (id, data) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/mentor/update/mentor/byid/${id.mentorId}`,
      {
        method: "PATCH",
        body: data,
        headers: { Authorization: "Bearer " + auth.token },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };

  const addMentor = async (data) => {
    const response = await fetch(`${BASE_URL}/api/codex/mentor/create/mentor`, {
      method: "POST",
      headers: { Authorization: "Bearer " + auth.token },
      body: data,
    });
    if (!response.ok) {
      throw new Error("Failed to add mentor");
    }
    return response;
  };
  const deleteMentor = async (id) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/mentor/delete/mentor/byid/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: "Bearer " + auth.token },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to add mentor");
    }
    return response;
  };
  // Member apis
  const fetchMembers = async () => {
    const response = await fetch(
      `${BASE_URL}/api/codex/member/get/all/members`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const fetchCoreMembers = async () => {
    const response = await fetch(
      `${BASE_URL}/api/codex/member/get/members/byrole/Core_Member`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const fetchExecutiveMembers = async () => {
    const response = await fetch(
      `${BASE_URL}/api/codex/member/get/members/byrole/Executive_Member`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const updateMemberById = async (id, data) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/member/update/member/byid/${id.memberId}`,
      {
        method: "PATCH",
        body: data,
        headers: { Authorization: "Bearer " + auth.token },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const addMember = async (data) => {
    const response = await fetch(`${BASE_URL}/api/codex/member/create/member`, {
      method: "POST",
      headers: { Authorization: "Bearer " + auth.token },
      body: data,
    });
    if (!response.ok) {
      throw new Error("Failed to add member");
    }
    return response;
  };
  const fetchMemberById = async (id) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/member/get/member/byid/${id.memberId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const deleteMember = async (id) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/member/delete/member/byid/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: "Bearer " + auth.token },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to add member");
    }
    return response;
  };
  // Event apis
  const fetchEvents = async () => {
    const response = await fetch(`${BASE_URL}/api/codex/event/get/all/events`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const updateEventById = async (id, data) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/event/update/event/byid/${id.eventId}`,
      {
        method: "PATCH",
        body: data,
        headers: { Authorization: "Bearer " + auth.token },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const addEvent = async (data) => {
    const response = await fetch(`${BASE_URL}/api/codex/event/create/event`, {
      method: "POST",
      headers: { Authorization: "Bearer " + auth.token },
      body: data,
    });
    if (!response.ok) {
      throw new Error("Failed to add event");
    }
    return response;
  };
  const fetchEventById = async (id) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/event/get/event/byid/${id.eventId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response;
  };
  const deleteEvent = async (id) => {
    const response = await fetch(
      `${BASE_URL}/api/codex/event/delete/event/byid/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: "Bearer " + auth.token },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to add event");
    }
    return response;
  };
  return {
    login,
    fetchMentors,
    fetchMentorById,
    updateMentorById,
    addMentor,
    deleteMentor,
    fetchMembers,
    fetchCoreMembers,
    fetchExecutiveMembers,
    fetchMemberById,
    updateMemberById,
    addMember,
    deleteMember,
    fetchEvents,
    updateEventById,
    addEvent,
    deleteEvent,
    fetchEventById,
  };
};
export default Api;
