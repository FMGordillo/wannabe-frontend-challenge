import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { swapiFetcher } from "utils/fetcher";

/**
 * Utility to append `page` parameter
 */
export const getByPage = <D = any>(config: AxiosRequestConfig<D>, page = 1) =>
  swapiFetcher<any, AxiosResponse<D>>({
    ...config,
    params: { ...config.params, page },
  });

/**
 * Utility to append `id` field to URL
 */
export const getById = <D = any>(config: AxiosRequestConfig<D>, id?: string) =>
  swapiFetcher<any, AxiosResponse<D>>({
    ...config,
    url: `${config.url}/${id}`,
  });

/**
 * Utility to know if the current API response has `next` property with data
 */
export const hasNextPage = (response = { next: null }) =>
  response?.next !== null;
