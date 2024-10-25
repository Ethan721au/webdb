import { dbconnect } from "@/config/mongoDB.config";
import { getPlayer } from "@/services/playerService";

export default async function Home() {
  const player = await getPlayer();
  console.log(player);

  dbconnect();
  return (
    <>
      <div>{player.name}</div>
    </>
  );
}
