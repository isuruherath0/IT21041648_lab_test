import axios from "axios";
const API_URL = "http://localhost:3001/api/books/";

const getAllPosts = async () => {
  const response = await axios.get(API_URL + "all");
  return response.data;
};

const addNewPost = async (book) => {
  
  const response = await axios.post(API_URL + "add", post,);
  return response.data;
};

export default {
  getAllPosts,
  addNewPost,
};
