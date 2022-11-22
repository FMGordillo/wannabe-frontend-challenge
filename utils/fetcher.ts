import axios from "axios";
import { SWAPI_BASE_URL } from "../constants";

const swapiFetcher = axios.create({
  baseURL: SWAPI_BASE_URL,
});
