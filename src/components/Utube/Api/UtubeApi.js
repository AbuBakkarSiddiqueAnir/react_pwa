import axios from "axios";
const KEY = "AIzaSyB1Ig1iEZ0G76THe-qlkwLsbg1y2HLm2Zo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY,
  },
});
