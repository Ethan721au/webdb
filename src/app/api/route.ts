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

export async function PUT() {
  const player = await getPlayer();
  return NextResponse.json({
    name: player.name,
    age: 25,
    email: "sdfsfs",
  });
}
