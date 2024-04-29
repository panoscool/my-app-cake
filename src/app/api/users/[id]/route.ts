import { NextResponse, type NextRequest } from "next/server";
import users from "@/data/users.json";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const searchParams = request.nextUrl.searchParams;
  const userId = params.id ?? searchParams.get("id");

  const user = users.find((user) => user.id === Number(userId));

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(
    { data: user },
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
