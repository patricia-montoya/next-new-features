import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3000/login" })
          }
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Link href="/login">Sign in</Link>
    </>
  );
}
