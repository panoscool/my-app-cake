import { NextResponse } from "next/server";
import products from "@/data/products.json";

export async function GET() {
  return NextResponse.json(
    { data: products },
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
