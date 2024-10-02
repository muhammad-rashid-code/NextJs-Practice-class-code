"use client";

import ButtonFunc from "./button";

type HelloWorldFuncType = {
  greet: string;
  message: string;
  labelClick: string;
  btnclickHand: () => void;
};
export default function HelloWorldFunc({
  btnclickHand,
  greet,
  labelClick,
  message,
}: HelloWorldFuncType) {
  return (
    <>
      <h1>{greet}</h1>
      <p>{message}</p>
      <ButtonFunc btnLabe={labelClick} btnHandler={btnclickHand} />
    </>
  );
}
