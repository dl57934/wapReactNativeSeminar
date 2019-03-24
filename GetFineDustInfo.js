import axios from "axios";

const API_URL = "http://api.airvisual.com/v2/nearest_city?";
const API_KEY = "XXm7ieKhA4KC5s2p9";

const getFineDustInfo = async ({ lat, lon }) => {
  const REQUEST_URL = `${API_URL}lat=${lat}&lon=${lon}&key=${API_KEY}`;
  const dustInfo = await fetch(REQUEST_URL).catch(err => console.log(err));
  const { data } = await dustInfo.json();
  console.log(data);
};

export default getFineDustInfo;
