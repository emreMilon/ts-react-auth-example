import axios from "axios";

export const postAPI = async (url: string, post: object, token?: any) => {
  const res = await axios.post(`/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const getAPI = async (url: string, token?: any) => {
  const res = await axios.get(`/api/${url}`, {
    headers: { tokenn: `${localStorage.getItem('logged')}`  },
  });

  return res;
};
