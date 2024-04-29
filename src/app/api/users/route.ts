import { NextResponse } from "next/server";
import users from "@/data/users.json";

export async function GET() {
  return NextResponse.json(
    { data: users },
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
