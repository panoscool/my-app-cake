import { simulateFetch } from "@/lib/fetch-sim";
import { ProductDetails } from "../../../components/shop/product-details";

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const { data } = await simulateFetch("products", productId, { simulateDelayMs: 200 });

  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
}
