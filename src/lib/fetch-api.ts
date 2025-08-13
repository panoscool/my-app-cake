import { TResource } from "@/types/common";

type TOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  cache?: "no-cache" | "no-store" | "default" | "reload" | "force-cache" | "only-if-cached";
  next?: { revalidate?: number; tags?: string[] };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getData = async (resource: TResource, options?: TOptions) => {
  // await delay(3000);

  return fetch(`${BASE_URL}/api/${resource}`, options).then((res) => res.json());
};

export const getDataById = async (resource: TResource, id: number | string, options?: TOptions) => {
  // await delay(1000);

  return fetch(`${BASE_URL}/api/${resource}/${id}`, options).then((res) => res.json());
};
