import { recordGame } from "@/services/gameService";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const req = await request.json();
  console.log(req, "req");
  // const newGame = recordGame(req);
  // const updatedPlayer = await updatePlayer(player);
  // console.log(updatedPlayer, "updatedPlayer");

  return NextResponse.json({
    // name: updatedPlayer.first_name,
    // age: 25,
    // email: "sdfsfs",
  });
}
