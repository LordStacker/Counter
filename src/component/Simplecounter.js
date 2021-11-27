import react from "react";
import "../styles/counter.css";
import { useEffect, useState } from "react";

const Simplecounter = (props) => {
    const [seconds, setSeconds] = useState(1000000000);

    useEffect (() => {
        if (seconds > 0){
            setTimeout(() => setSeconds(seconds -1), 1000);
        } else {
            setSeconds("K-Boom!");
        }
    })

    

  return (
    <div className="container">
      <div className="counter d-flex flex-row mx-auto my-auto">
        <div><i className="bi bi-clock"></i></div>
        <div>{seconds}</div>
      </div>
    </div>
  );
};

export default Simplecounter;
