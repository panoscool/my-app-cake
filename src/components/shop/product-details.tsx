import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TProduct } from "@/types/common";

export function ProductDetails({ product }: { product: TProduct }) {
  return (
    <section className="container grid md:grid-cols-2 w-full">
      <div className="flex flex-col justify-center min-h-screen py-12 md:py-24 space-y-4 md:space-y-6 px-4 md:px-6">
        <Image
          src={product.image}
          alt={product.title}
          width={350}
          height={350}
          className="w-full  object-contain"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="grid gap-4 items-star content-center">
        <div>
          <h4 className="text-4xl font-bold pb-4">{product.title}</h4>
          <div>{product.description}</div>
        </div>
        <div className="grid gap-2">
          <Label className="text-base" htmlFor="color">
            Color
          </Label>
          <RadioGroup className="flex items-center gap-2" defaultValue="black" id="color">
            <Label
              className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              htmlFor="color-black"
            >
              <RadioGroupItem id="color-black" value="black" />
              Black
            </Label>
            <Label
              className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              htmlFor="color-white"
            >
              <RadioGroupItem id="color-white" value="white" />
              White
            </Label>
            <Label
              className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              htmlFor="color-blue"
            >
              <RadioGroupItem id="color-blue" value="blue" />
              Blue
            </Label>
          </RadioGroup>
        </div>
        <div className="grid gap-2 pb-8">
          <Label className="text-base" htmlFor="quantity">
            Quantity
          </Label>
          <Select defaultValue="1">
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-4xl font-bold">AED {product.price}</div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button size="lg">Add to cart</Button>
          <Button size="lg" variant="outline">
            <HeartIcon className="w-4 h-4 mr-2" />
            Add to wishlist
          </Button>
        </div>
      </div>
    </section>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
