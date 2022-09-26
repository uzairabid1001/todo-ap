import { useState } from 'react';
import './App.css';

function App() {

let [txt, setTxt] =  useState(""); 
let [list,setlist] = useState([])
let add = ()=>{
  if (!txt){
    alert("text is requires")
    return;   
  }  
  list.push(txt);
  setlist([...list]); 
}
let delte = ()=>{
  setlist.push(0)
}
 
  return (
    <div className="App">
      <header className="App-header">
            <input className='inp'size={30} onChange ={(e)=>{
                   setTxt(e.target.value);
                                       
            }
          } />
            <button className='btn' onClick = {add}>Add</button>
            <button className='btn' onClick = {delte}>delte</button>
            <ul>
              {list.map((e,i)=>{
                 return <li  
             key = {i} >{e} </li>
            })}
            </ul>
       </header>
    </div>
  );
}

export default App;