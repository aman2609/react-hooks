import { useState } from "react";

let App=()=> {
  let [va,setVa]=useState(0);
  return (
    <div>
      <button onClick={()=>{
        setVa(va+1);
      }}>+</button>
      <div>{va}</div>
      <button onClick={()=>{
        setVa(va-1);
      }}>-</button>
    </div>
  );
}

export default App;
