import { useState ,useEffect } from "react";

let App=()=> {
  let [va,setVa]=useState(0);
  let [process,setProcess]=useState("running");
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
  // useEffect(()=>{
  //   console.log("useEffect case 2 was called");
  // })

  // case 3
  // array is passed with one of state variable
  // runs on first render & for change in state variable provided in array
  useEffect(()=>{
    console.log("useEffect case 3")
    console.log(process);
  },[process])


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
      <div>
        <h2>{process}</h2>
      </div>
      <button onClick={()=>{
        if(process==="running"){
          setProcess("stop");
        }else{
          setProcess("running");
        }
        
      }}>Kill Process</button>
    </div>
  );
}

export default App;
