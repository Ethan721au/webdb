"use client";

import { Player } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function PlayerForm() {
  const {
    register,
    reset,
    handleSubmit,
    // formState: { errors },
  } = useForm<Player>();

  const submit: SubmitHandler<Player> = async (data) => {
    const res = await fetch("http://localhost:3000/api/players", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const message = await res.json();
    console.log(message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <input
        type="text"
        placeholder="enter player first name"
        {...register("first_name")}
      />
      <input
        type="number"
        placeholder="enter player starting elo"
        {...register("elo")}
      />
      <button type="submit">Add new player</button>
    </form>
  );
}
