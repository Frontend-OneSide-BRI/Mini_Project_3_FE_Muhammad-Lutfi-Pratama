import axios from "axios";
import { BASE_URL, HEADER } from "src/config";

export default async function getPopularMovie() {
  let res = await axios.get(`${BASE_URL}/movie/popular`, {
    headers: HEADER,
  });
  console.log(res.data);
  return res.data;
}
