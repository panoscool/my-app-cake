import { getData } from "@/lib/fetch-api";
import { TProduct } from "@/types/common";
import { ProductItem } from "../../components/store/product-item";

export default async function StorePage() {
  const products = await getData("products", { cache: "force-cache" }).then((json) => json.data);

  const randomValue = Math.random();

  if (randomValue > 0.5) {
    throw new Error("Random error");
  }

  return (
    <div className="container mx-auto bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 md:p-6">
        {products.map((product: TProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
