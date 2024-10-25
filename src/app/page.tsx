import { dbconnect } from "@/config/mongoDB.config";
import { getPlayer } from "@/services/playerService";

export default async function Home() {
  // const player = await getPlayer();
  // const formData = new FormData();
  // formData.append("name", "Robert");
  // console.log(formData);
  const playerName = { name: "JC" };

  const test = await fetch("http://localhost:3000/api/", {
    method: "PUT",
    body: JSON.stringify(playerName),
  });
  // console.log(test, "test");
  const data = await test.json();
  console.log(data);
  // console.log(player);

  dbconnect();
  return (
    <>
      <div>{data.name}</div>
    </>
  );
}
