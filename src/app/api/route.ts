import { getPlayer } from "@/services/playerService";
import { NextResponse } from "next/server";

export async function GET() {
  const player = await getPlayer();
  return NextResponse.json({
    name: player.name,
    age: 25,
    email: "sdfsfs",
  });
}

export async function PUT(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  // const email = formData.get('email')
  // const player = await getPlayer();
  return NextResponse.json({
    name: name,
    age: 25,
    email: "sdfsfs",
  });
}
