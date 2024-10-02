"use client";

import HelloWorldFunc from "./greet";
import StudentList from "./sutdentlist";

export default function Home() {
  const signup = () => {
    console.log("This is signup func.");
  };
  const Login = () => {
    console.log("This is Login func.");
  };
  const forgetpassword = () => {
    console.log("This is forgetpassword func.");
  };
  return (
    <>
      <HelloWorldFunc
        greet={"Assalamuaalikum"}
        message={"The quick brown fox jumps over the lazy dog."}
        labelClick={"Signup"}
        btnclickHand={signup}
      />
      <HelloWorldFunc
        greet={"Hello"}
        message={"How are you?"}
        labelClick={"Login"}
        btnclickHand={Login}
      />
      <HelloWorldFunc
        greet={"Eid Mubarak"}
        message={"Eidi lete"}
        labelClick={"Forget Password"}
        btnclickHand={forgetpassword}
      />
      <StudentList />
    </>
  );
}
