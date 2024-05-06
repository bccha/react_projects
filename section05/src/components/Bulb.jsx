import { useState } from "react";
import Button from "./Button";

const Bulb = () => {
  console.log("bulb");
  const [light, setLight] = useState(false);
  return (
    <div>
      <h1 style={{ backgroundColor: light ? "orange" : "gray" }}>
        {light ? "ON" : "OFF"}
      </h1>
      <Button
        text={`turn light ${light ? "off" : "on"}`}
        onClick={() => {
          setLight(!light);
        }}
      ></Button>
    </div>
  );
};

export default Bulb;
