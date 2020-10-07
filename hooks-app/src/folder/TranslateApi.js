import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

export default axios.create({
  data: null,
  params: {
    key: KEY,
  },
});
