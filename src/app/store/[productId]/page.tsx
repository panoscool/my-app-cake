import { getDataById } from "@/lib/fetch-api";
import { ProductDetails } from "../../../components/store/product-details";

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const product = await getDataById("products", params.productId).then((json) => json.data);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
