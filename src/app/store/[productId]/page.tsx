import { getDataById } from "@/lib/fetch-api";
import { ProductDetails } from "../../../components/store/product-details";

export default async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = await getDataById("products", productId).then((json) => json.data);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
