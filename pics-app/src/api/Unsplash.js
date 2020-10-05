import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID JK6tZ03HsIPksRYk56LXvveU9IKXKmU-aIA6yfiKdBE",
  },
});
