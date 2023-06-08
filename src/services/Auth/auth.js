import axios from "axios";
import { BASE_URL, HEADER } from "src/config";

export default async function generateTokenAPI() {
  let res = await axios.get(`${BASE_URL}/authentication/token/new`, {
    headers: HEADER,
  });
  return res.data;
}
