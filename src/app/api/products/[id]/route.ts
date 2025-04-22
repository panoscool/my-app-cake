import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import products from "@/data/products.json";

export async function GET(request: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const searchParams = request.nextUrl.searchParams;
  const productId = params.id ?? searchParams.get("id");

  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(
    { data: product },
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
