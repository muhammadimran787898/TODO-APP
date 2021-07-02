import {useSelector} from "react-redux";
import{useDispatch} from "react-redux";
import {deletedata,alldelete} from './store';
import { Container, Row, Col } from 'bootstrap-4-react';

export default function Histortodotypey(){
    let tododata= useSelector(state => state.todolist);
    let date=new Date().toLocaleDateString();
    let ti=new Date().toLocaleTimeString();
    console.log(tododata);

    let dispatch = useDispatch()
    
    return<Container className="hishead"><p>TODO-HISTORY</p>
           {tododata.map((t)=>{
            return(<Row>
                 <Col col="sm"> {t.todotype}</Col>
                  <Col col="sm">{date}</Col>
                  <Col col="sm">{ti}</Col>
       <Col col="sm"><button  className="delbutton"  onClick={()=>(dispatch(deletedata(t.id)))}>X</button></Col>
             </Row>   )})}
           <button className="clearall" onClick={()=>dispatch(alldelete())} >Delete All</button>
           </Container>}