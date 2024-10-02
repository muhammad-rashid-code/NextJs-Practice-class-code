"use client";

type ButtonFuncType = {
  btnLabe: string;
  btnHandler: () => void;
};
export default function ButtonFunc({ btnLabe, btnHandler }: ButtonFuncType) {
  return (
    <>
      <button onClick={btnHandler}>{btnLabe}</button>
    </>
  );
}
