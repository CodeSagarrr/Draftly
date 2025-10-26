import axios from "axios";

const api = axios.create({
  baseURL:'http://localhost:3000/api'
});

interface User {
  username: string;
  email: string;
  password: string;
}

interface emailProps {
  language: string;
  tone: string;
  length: string;
  topic: string;
}

interface sendEmailProps {
  to: string;
  subject: string;
  text: string;
}

interface ParaphraserProps {
  language: string;
  tone: string;
  text: string;
}

export const createUser = async (payLoad: User) => {
  const response = await api.post("/register", payLoad);
  if (response.status !== 200) {
    return response.data.error;
  }
  return response.data.message;
};

export const createConciseEmail = async (payload: emailProps) => {
  const response = await api.post("/email-generator", payload, {
    withCredentials: true,
  });
  if (response.status !== 200) {
    return response.data;
  }
  return response.data;
};

export const getUserEmails = async (page: number) => {
  const response = await api.get(`/get-emails/${page}`, {
    withCredentials: true,
  });
  if (response.status !== 200) {
    return response.data.error;
  }
  return response.data;
};

export const sendUserEmail = async (payload: sendEmailProps) => {
  const response = await api.post(`/send-email`, payload, {
    withCredentials: true,
  });
  if (response.status !== 200) {
    return response.data.error;
  }
  return response.data.data;
};

export const GetSentUserEmails = async (page: number) => {
  const response = await api.get(`/get-sent-emails/${page}`, {
    withCredentials: true,
  });
  if (response.status !== 200) {
    return response.data.error;
  }
  return response.data;
};

export const Paraphrase = async (payload: ParaphraserProps) => {
  const response = await api.post(`/paraphraser`, payload, {
    withCredentials: true,
  });
  if (response.status !== 200) {
    return response.data.error;
  }
  return response.data;
};
