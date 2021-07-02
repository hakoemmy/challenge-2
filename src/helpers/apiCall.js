import axios from "axios";

export default axios.create({
  baseURL: "https://challenge-3-backend.herokuapp.com/api/v1"
});