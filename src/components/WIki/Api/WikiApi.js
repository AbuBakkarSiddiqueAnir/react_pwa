import axios from "axios";
const WikiApi = async (searchTerm) => {
    const apiRecievedData = await axios.get(
        "https://en.wikipedia.org/w/api.php",
        {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: searchTerm || "wikipedia",
          },
        }
      );
      
      return apiRecievedData
}

export default WikiApi;