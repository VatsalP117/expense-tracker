import { useEffect } from "react";
export default function Test() {
  useEffect(async () => {
    const res = await fetch("/api/handletransactions/vatsal4011@gmail.com");
    const dat1 = await res.json();
    console.log(dat1);
  }, [2]);
  return <h1>Whatt</h1>;
}
