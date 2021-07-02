
import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {addnew} from "./store";



var ID = function () {
    
    return '_' + Math.random().toString(36).substr(2, 9);
    
  };


  
  export default function Inputs(){
      const [state, setstate] = useState();
      let dispatch=useDispatch();

function newadd(e){
    console.log(state);
    e.preventDefault();
    let id=ID();
    let newdata={
        
        todotype:state,
        id:id
    };
dispatch(addnew(newdata));

}
    return(<div className="inp">
        <div className="box">
        <input className="iii" type="text" value={state} placeholder="Enter New Type"
         onChange={(e)=>setstate(e.target.value)}></input>
         <button className="button" onClick={(e)=>newadd(e)} >ADD</button>
         </div>

    </div>)

}