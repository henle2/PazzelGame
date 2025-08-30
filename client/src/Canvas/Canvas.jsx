import { useRef } from "react";

const Canvas= props=>{
  const ref=useRef();
  const canvas=ref.current;
return <canvas ref={ref}{...props}/>}

export default canvas;