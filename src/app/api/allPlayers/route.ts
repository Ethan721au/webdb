import { getAllPlayers } from "@/services/playerService";
import { NextResponse } from "next/server";

export async function GET() {
  const players = await getAllPlayers();
  return NextResponse.json({
    players,
  });
}
