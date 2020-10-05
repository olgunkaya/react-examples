import axios from "axios";

const KEY = "AIzaSyDAWZ2aAto_8DVivahufpCUo6MoutH4ePY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
