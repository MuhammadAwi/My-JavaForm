import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "@/pages/config/firebase";

export default function MainAuth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(auth?.currentUser?.email);
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-1 border-black "
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="border p-1 border-black "
      />
      <button onClick={handleSignIn} className="border p-1 border-black ">
        Sign In
      </button>
      <button onClick={() => handleGoogleSignIn()}>Sign In with google</button>
      <button onClick={() => handleSignOut()}>SignOut</button>
    </div>
  );
}
