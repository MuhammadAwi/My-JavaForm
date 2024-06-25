import React, { useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "@/pages/config/firebase";

export default function MainAuth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [callData, setCallData] = useState();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const postUserData = (e) => {
    (name = e.target.name), (value = e.target.value);
    setUserData({ ...userData, [name]: value });
  };

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
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
  const handleCallData = async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        setCallData(res.data);
      });
    console.log(data);
  };
  console.log(callData);
  return (
    <div className="flex flex-col gap-4">
      <input
        placeholder="Email"
        className="border p-1 border-black text-black "
        name="email"
        value={email}
        onChange={postUserData}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        className="border p-1 border-black text-black "
        value={password}
        onChange={postUserData}
      />
      <button onClick={handleSignIn} className="border p-1 border-black ">
        Sign In
      </button>
      <button onClick={() => handleGoogleSignIn()}>Sign In with google</button>
      <button onClick={() => handleSignOut()}>SignOut</button>
      <button onClick={() => handleCallData()}>Call Data</button>
      {/* <p>{callData}</p> */}
      <p>Your Name is:{callData?.title}</p>
      <p>Your Id is:{callData?.id}</p>
      <p>Your status is:{`${callData?.completed}`}</p>
    </div>
  );
}
