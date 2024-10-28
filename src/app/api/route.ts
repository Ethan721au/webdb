import { getPlayer, updatePlayer } from "@/services/playerService";
import { NextResponse } from "next/server";

export async function GET() {
  const player = await getPlayer({ first_name: "Eric" });
  return NextResponse.json({
    name: player.first_name,
    age: 25,
    email: "sdfsfs",
  });
}

export async function PUT(request: Request) {
  const player = await request.json();
  const updatedPlayer = await updatePlayer(player);

  return NextResponse.json({
    name: updatedPlayer.first_name,
    age: 25,
    email: "sdfsfs",
  });
}
