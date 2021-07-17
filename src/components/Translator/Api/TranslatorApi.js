import axios from "axios";

const TranslatorApi = async (language,text) => {
  
    const apiData = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
        params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
        }
    );
    return apiData;
}

export default TranslatorApi