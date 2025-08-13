import { TResource } from "@/types/common";
import users from "@/data/users.json";
import products from "@/data/products.json";

export type TSimulateOptions = {
  simulateDelayMs?: number;
};

const dataset: Record<string, any> = {
  users,
  products,
};

export async function simulateFetch(
  resource: TResource,
  id?: number | string,
  options?: TSimulateOptions
) {
  const { simulateDelayMs = 300 } = options || {};
  if (simulateDelayMs) {
    await new Promise((r) => setTimeout(r, simulateDelayMs));
  }
  const baseData = dataset[resource];
  if (id != null) {
    const item = Array.isArray(baseData)
      ? baseData.find((x: any) => x.id === Number(id))
      : baseData?.[id as any];
    return item
      ? { data: item, simulated: true }
      : { data: null, error: "Not found (simulated)", simulated: true };
  }
  return { data: baseData, simulated: true };
}
