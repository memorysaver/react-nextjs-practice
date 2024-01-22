import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "656bfa103e3449be94ce0c402d3fc1f4",
  },
});
