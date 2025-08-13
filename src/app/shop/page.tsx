import { simulateFetch } from "@/lib/fetch-sim";
import { TProduct } from "@/types/common";
import { ProductItem } from "../../components/shop/product-item";

export default async function ShopPage() {
  const { data } = await simulateFetch("products", undefined, { simulateDelayMs: 200 });

  // if (Math.random() > 0.5) {
  //   throw new Error("Random error");
  // }

  return (
    <div className="container mx-auto bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 md:p-6">
        {data.map((product: TProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
