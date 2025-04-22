"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const serverAction = async () => {
  console.log("Server Action");
};

export const serverRedirectAction = async () => {
  console.log("Server Redirect");

  // ATTENTION: Redirect should not be inside a try/catch block
  redirect("/some-path");
};

export const serverRevalidateAction = async () => {
  console.log("Server Revalidate");
  revalidatePath("/some-path");
};
