import { signOut } from "@/auth";

export default function LogOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}>
      <button type="submit">Sign out</button>
    </form>
  );
}
