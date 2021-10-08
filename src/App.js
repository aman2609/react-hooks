import { useState ,useEffect } from "react";

let App=()=> {
  let [va,setVa]=useState(0);
  
  console.log("app");
  // useEffect is a hook which is used only inside functional component 
  // it takes 2 input =>function & array(optional)
  // based on array passed or not we have 3 cases
  // case 1
  // Empty array is passed
  // useEffect is caleed only once in this case only after first render(like componentDidMount)
  // useEffect(()=>{
  //   console.log("useEffect case 1 was called")
  // },[])


  // case 2
  // no array is passed
  // useEffect is caleed after render & each rerender
  useEffect(()=>{
    console.log("useEffect case 2 was called");
  })

  


  return (
    
    <div>
      {console.log("ret")}
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
