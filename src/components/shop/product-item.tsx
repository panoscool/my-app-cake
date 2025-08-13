import { TProduct } from "@/types/common";
import Image from "next/image";
import Link from "next/link";

export function ProductItem({ product }: { product: TProduct }) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950 flex flex-col"
    >
      <Image
        alt="Product 1"
        className="w-full h-48 object-contain"
        height={300}
        width={400}
        src={product.image}
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2 truncate">{product.title}</h3>
          <p className="text-gray-500 mb-4 truncate">{product.description}</p>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-lg font-bold">AED {product.price}</span>
        </div>
      </div>
    </Link>
  );
}
