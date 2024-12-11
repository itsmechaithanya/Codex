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
export const fetchMentors = async () => {
  const response = await fetch(`${BASE_URL}/api/codex/mentor/get/all/mentors`);
  if (!response.ok) {
    throw new Error("Failed to authenticate");
  }
  return response;
};
export const fetchMembers = async () => {
  const response = await fetch(`${BASE_URL}/api/codex/member/get/all/members`);
  if (!response.ok) {
    throw new Error("Failed to authenticate");
  }
  return response;
};
