import { TProduct } from "@/types/common";
import { ProductItem } from "./product-item";

export function ProductsList({ product }: { product: TProduct[] }) {
  return (
    <div className="container">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 md:p-6">
        {product.map((product: TProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
