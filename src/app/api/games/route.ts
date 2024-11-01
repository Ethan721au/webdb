import { getAllGames, recordGame } from "@/services/gameService";
import { NextResponse } from "next/server";

export async function GET() {
  const games = await getAllGames();
  return NextResponse.json({
    games,
  });
}

export async function POST(request: Request) {
  const req = await request.json();
  const message = await recordGame(req);

  return NextResponse.json(message);
}
