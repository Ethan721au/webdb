import { getPlayer, updatePlayer } from "@/services/playerService";
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
  console.log(request, "request");
  const name = await request.json();
  console.log(name, "name");
  // const formData = await request.formData();
  // const name = formData.get("name");
  // if (!name) {
  //   return NextResponse.json({ error: "Name is required" }, { status: 400 });
  // }
  return NextResponse.json({
    name: name.name,
    age: 25,
    email: "sdfsfs",
  });
}
