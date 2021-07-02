
import {createStore} from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
 

let initialstate={
    todolist:[
        {  id:1,
         todotype:"job"},

    { id:2,
     todotype:"lunch"},

{  id:3,
   todotype:"lahore"}
]}

export function addnew(data){
    return{
        type:"new-add",
        payload:data,

    }
}
    export function deletedata(id){
        return{
            type:"new-del",
            payload:id,
    
        }
}

    
    export function alldelete(){
        return{
            type:"all-del",
            // payload:id,
    
        }
}

function ListReducer(state=initialstate, action){
    
    switch(action.type){
    case "new-add":{
        return{
            ...state,
            todolist:[action.payload,...state.todolist]
        }
    }
    case "new-del":{
        return{
            todolist:state.todolist.filter(d=>d.id !==action.payload)
        }
    }
    case "all-del":{
        return{
            todolist:[]

        }
    }
        default:
            return state;
    }
}

let store=createStore(ListReducer);
export default store;



