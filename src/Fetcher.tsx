import axios from "axios";

const fetcher = async (url: string) => {
  const token = localStorage.getItem("token");

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });

  return data;
};

export default fetcher;
