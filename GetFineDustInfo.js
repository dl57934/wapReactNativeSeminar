import axios from "axios";

const API_KEY = "XXm7ieKhA4KC5s2p9";

const getFineDustInfo = async ({ lat, lon }) => {
  const API_URL = `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&rad=500&key=${API_KEY}`;
  console.log(API_URL);
  const { receiveData } = await axios.get(API_URL);
  console.log(receiveData);
};

export default getFineDustInfo;
