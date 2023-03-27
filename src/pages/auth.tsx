import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Auth = (props) => {
  const user = useUser();
  return (
    <div>
      <div>
        {/* Remove SIgn In for now */}
        {!user.isSignedIn && (
          <SignInButton mode="modal">
            <button className="btn"></button>
          </SignInButton>
        )}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
      <SignIn path="/" routing="path" signUpUrl="/" />
    </div>
  );
};

export default Auth;
