import axios, { AxiosInstance, AxiosResponse } from "axios";
import { SWAPI_BASE_URL } from "./constants";

export const swapiFetcher = axios.create({
  baseURL: SWAPI_BASE_URL,
});

/**
 * Wrapper for `axios` calls
 *
 * Intended to use for `useSWR`
 */
export const swrFetcher = <T = any, D = any>(
  instance: Promise<AxiosResponse<T, D>>
) => instance.then(({ data }) => data);
