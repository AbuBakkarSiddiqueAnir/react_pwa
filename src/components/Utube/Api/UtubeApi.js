import axios from "axios";
const KEY = "AIzaSyB1Ig1iEZ0G76THe-qlkwLsbg1y2HLm2Zo";
const extraKey ="AIzaSyASkoo7_1atEZTvdGr83Rroc_EHXCOrYNM"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
});
