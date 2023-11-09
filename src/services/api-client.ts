import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "06c24870aac2435d8392e4b5f32111dd",
  },
});
