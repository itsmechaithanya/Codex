const BASE_URL = import.meta.env.REACT_APP_BACKEND_URL;

export const login = async (data) => {
  const response = await fetch(`${BASE_URL}/api/codex/mentor/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to authenticate");
  }
  return response;
};
// Mentor apis
export const fetchMentors = async () => {
  const response = await fetch(`${BASE_URL}/api/codex/mentor/get/all/mentors`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
export const fetchMentorById = async (id) => {
  const response = await fetch(
    `${BASE_URL}/api/codex/mentor/get/mentor/byid/${id.mentorId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
export const updateMentorById = async (id, data) => {
  const response = await fetch(
    `${BASE_URL}/api/codex/mentor/update/mentor/byid/${id.mentorId}`,
    { method: "PATCH", body: data }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};

export const addMentor = async (data) => {
  console.log(data);
  const response = await fetch(`${BASE_URL}/api/codex/mentor/create/mentor`, {
    method: "POST",

    body: data,
  });
  if (!response.ok) {
    throw new Error("Failed to add mentor");
  }
  return response;
};
export const deleteMentor = async (id) => {
  console.log(id);
  const response = await fetch(
    `${BASE_URL}/api/codex/mentor/delete/mentor/byid/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add mentor");
  }
  return response;
};
//member apis
export const fetchMembers = async () => {
  const response = await fetch(`${BASE_URL}/api/codex/member/get/all/members`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
export const updateMemberById = async (id, data) => {
  const response = await fetch(
    `${BASE_URL}/api/codex/member/update/member/byid/${id.memberId}`,
    { method: "PATCH", body: data }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
export const addMember = async (data) => {
  console.log(data);
  const response = await fetch(`${BASE_URL}/api/codex/member/create/member`, {
    method: "POST",

    body: data,
  });
  if (!response.ok) {
    throw new Error("Failed to add member");
  }
  return response;
};
export const fetchMemberById = async (id) => {
  const response = await fetch(
    `${BASE_URL}/api/codex/member/get/member/byid/${id.memberId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
export const deleteMember = async (id) => {
  console.log(id);
  const response = await fetch(
    `${BASE_URL}/api/codex/member/delete/member/byid/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add member");
  }
  return response;
};
// event apis
export const fetchEvents = async () => {
  const response = await fetch(`${BASE_URL}/api/codex/event/get/all/events`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
export const updateEventById = async (id, data) => {
  const response = await fetch(
    `${BASE_URL}/api/codex/event/update/event/byid/${id.eventId}`,
    { method: "PATCH", body: data }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
export const addEvent = async (data) => {
  console.log(data);
  const response = await fetch(`${BASE_URL}/api/codex/event/create/event`, {
    method: "POST",

    body: data,
  });
  if (!response.ok) {
    throw new Error("Failed to add event");
  }
  return response;
};
export const fetchEventById = async (id) => {
  const response = await fetch(
    `${BASE_URL}/api/codex/event/get/event/byid/${id.eventId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response;
};
export const deleteEvent = async (id) => {
  console.log(id);
  const response = await fetch(
    `${BASE_URL}/api/codex/event/delete/event/byid/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to add event");
  }
  return response;
};
