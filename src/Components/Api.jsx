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
export const fetchMembers = async (data) => {
  const response = await fetch(`${BASE_URL}/member/get/all/members`);
  if (!response.ok) {
    throw new Error("Failed to authenticate");
  }
  return response;
};
