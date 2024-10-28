import { recordGame } from "@/services/gameService";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const req = await request.json();
  const message = await recordGame(req);

  return NextResponse.json(message);
}
