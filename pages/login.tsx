import { signIn } from "next-auth/react";

const Login = () => {
  const handleSignIn = async () => {
    try {
      const response = await signIn("github", {
        callbackUrl: "http://localhost:3000",
      });
      console.log({ response });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Breakable toy - Nextjs</h3>

      <button onClick={handleSignIn}>Sign In with Github</button>
    </div>
  );
};

export default Login;
