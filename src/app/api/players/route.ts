import { addPlayer, getAllPlayers } from "@/services/playerService";
import { NextResponse } from "next/server";

export async function GET() {
  const players = await getAllPlayers();
  return NextResponse.json({
    players,
  });
}

export async function POST(request: Request) {
  const req = await request.json();
  const message = await addPlayer(req);
  return NextResponse.json(message);
}
